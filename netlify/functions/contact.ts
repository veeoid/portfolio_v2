import type { Handler } from "@netlify/functions";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const validate = (payload: { name?: unknown; email?: unknown; message?: unknown }) => {
  const errors: Record<string, string> = {};
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 15) {
    errors.message = "Message should be at least 15 characters.";
  }

  return { errors, name, email, message };
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." }),
      headers: { Allow: "POST" },
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Request body is required." }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON payload." }),
    };
  }

  const { errors, name, email, message } = validate(payload);
  if (Object.keys(errors).length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Validation failed.", errors }),
    };
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;
  const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL;

  if (!SENDGRID_API_KEY || !SENDGRID_FROM_EMAIL || !SENDGRID_TO_EMAIL) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          "Email provider is not configured. Set SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, and SENDGRID_TO_EMAIL in Netlify environment variables.",
      }),
    };
  }

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: SENDGRID_TO_EMAIL }],
            subject: "Portfolio Contact Message",
          },
        ],
        from: {
          email: SENDGRID_FROM_EMAIL,
          name: "Portfolio Contact",
        },
        reply_to: {
          email,
          name,
        },
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Failed to send email.", details: text }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to send message.", details: String(error) }),
    };
  }
};
