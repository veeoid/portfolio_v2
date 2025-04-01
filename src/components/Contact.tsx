import { useState, useEffect, FormEvent } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  // useEffect(() => {
  //   console.log("🛠️ VITE_EMAILJS_SERVICE_ID (prod):", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  //   console.log("🛠️ VITE_EMAILJS_TEMPLATE_ID (prod):", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  //   console.log("🛠️ VITE_EMAILJS_PUBLIC_KEY (prod):", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Email sending failed:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] py-24 text-white">
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="relative inline-block text-4xl font-bold">
            Get In Touch
            <span className="absolute -bottom-1 left-1/2 h-[3px] w-28 -translate-x-1/2 rounded bg-gradient-to-r from-[#6cccb4] to-[#cdaa57] opacity-80"></span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="mb-2 inline-block border-b-2 border-transparent text-2xl font-semibold text-[#6cccb4] transition hover:border-[#6cccb4]">
                Let's Connect
              </h3>
              <p className="mt-3 max-w-md text-gray-400">
                I'm always open to new opportunities, collaborations, or a quick chat about tech.
                Drop me a message anytime!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gradient-to-br from-[#6cccb4] to-[#cdaa57] p-2">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                    <path strokeLinecap="round" d="M3 12a9 9 0 1 1 18 0" />
                  </svg>
                </div>
                <a
                  href="mailto:vismaychuadhari7@gmail.com"
                  className="text-gray-300 transition hover:text-[#6cccb4]"
                >
                  vismaychuadhari7@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gradient-to-br from-[#6cccb4] to-[#cdaa57] p-2">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
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
                </div>
                <span className="text-gray-300">Seattle, WA</span>
              </div>

              <div className="flex space-x-5 pt-2">
                <a
                  href="https://github.com/veeoid"
                  target="_blank"
                  className="transform transition hover:scale-110 hover:text-[#6cccb4]"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vismay-chaudhari/"
                  target="_blank"
                  className="transform transition hover:scale-110 hover:text-[#6cccb4]"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-[#222] bg-[#151515] p-8 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mb-6 text-[#6cccb4]">
                  <svg
                    className="mx-auto h-14 w-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-semibold">Thanks for reaching out!</h3>
                <p className="text-gray-400">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#333] bg-[#1f1f1f] px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-[#6cccb4]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#333] bg-[#1f1f1f] px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-[#6cccb4]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-md border border-[#333] bg-[#1f1f1f] px-4 py-3 text-white transition focus:outline-none focus:ring-2 focus:ring-[#6cccb4]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-gradient-to-r from-[#6cccb4] to-[#89d8c7] px-6 py-3 font-semibold text-[#151514] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
