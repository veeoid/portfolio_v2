import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined, submit: undefined }));
  };

  const validate = () => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.email.trim()) errors.email = "Please enter your email.";
    else if (!isValidEmail(formData.email)) errors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) errors.message = "Please enter a message.";
    else if (formData.message.trim().length < 15)
      errors.message = "Message should be at least 15 characters.";
    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        setFormErrors({ submit: result?.error || "Unable to send message." });
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setFormErrors({ submit: "Unable to send message right now. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-background py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Get in touch</h2>
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-start">
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-muted">
              For roles, collaborations, or questions about my work, email me or use the form.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:vismaychaudhari7@gmail.com"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
              >
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                vismaychaudhari7@gmail.com
              </a>
              <div className="text-dim flex items-center gap-3 text-sm">
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Seattle, WA
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/veeoid"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border px-4 py-2 text-xs text-muted hover:border-accent hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/vismay-chaudhari/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border px-4 py-2 text-xs text-muted hover:border-accent hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="flex h-full flex-col items-start justify-center gap-4 py-12">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Message sent.
                </h3>
                <p className="text-sm text-muted">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="placeholder:text-dim"
                  />
                  {formErrors.name ? (
                    <p className="mt-2 text-xs text-accent">{formErrors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="placeholder:text-dim"
                  />
                  {formErrors.email ? (
                    <p className="mt-2 text-xs text-accent">{formErrors.email}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs uppercase tracking-wider text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="What's on your mind?"
                    className="placeholder:text-dim resize-none"
                  />
                  {formErrors.message ? (
                    <p className="mt-2 text-xs text-accent">{formErrors.message}</p>
                  ) : null}
                </div>
                {formErrors.submit ? (
                  <div className="bg-surface rounded-sm px-4 py-3 text-sm text-accent">
                    {formErrors.submit}
                  </div>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-sm bg-accent py-3 text-sm font-semibold text-background hover:bg-[color:var(--accent-dim)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
