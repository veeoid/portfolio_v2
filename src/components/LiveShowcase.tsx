import { useEffect, useState } from "react";

const LIVE_PRODUCTS = [
  {
    name: "ClaimVerifier",
    tagline: "AI-assisted damage claim verification",
    description:
      "Submit a claim with photos, a vision-language model inspects the evidence, a deterministic rule engine issues the verdict, and results land on a live dashboard. Three services working together: a Next.js frontend, an ASP.NET Core API on PostgreSQL, and a FastAPI analysis pipeline.",
    url: "https://claim-verifier-one.vercel.app",
    repo: "https://github.com/veeoid/claim-verifier",
    image: "/images/project-claim-verifier.png",
    stack: ["Next.js", "ASP.NET Core", "FastAPI", "PostgreSQL", "Gemini VLM"],
  },
  {
    name: "WhatNow",
    tagline: "Real itineraries for the next few hours",
    description:
      "Pick your time, mood, budget, and transport, and get five ready-to-go itineraries built from real venues near you. A Python scoring pass ranks nearby places by distance and fit, an LLM agent composes them into time-blocked plans, and every stop is verified against live place data so nothing is invented. A Next.js frontend on Vercel proxies to a Flask service on Render.",
    url: "https://what-now-hazel.vercel.app",
    repo: "https://github.com/veeoid/WhatNow",
    image: "/images/project-whatnow.png",
    stack: ["Next.js", "Flask", "LangChain", "Groq", "Geoapify"],
  },
];

export default function LiveShowcase() {
  const [isVisible, setIsVisible] = useState(false);

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
    const section = document.getElementById("live");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="live" className="relative overflow-hidden bg-background py-24 text-foreground">
      <div
        className="animate-blob-drift pointer-events-none absolute -right-32 top-1/4 h-[440px] w-[440px] rounded-full opacity-[0.09] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--aur-amber) 0%, transparent 60%)" }}
      />

      <div
        className={`relative mx-auto max-w-6xl px-6 transition-all duration-1000 md:px-12 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">In Production</p>
          <h2 className="font-display text-4xl font-bold text-foreground">Live Right Now</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Not just repos — deployed products you can open and use.
          </p>
        </div>

        {LIVE_PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14"
          >
            {/* Copy */}
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#86c28b] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#86c28b]" />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#86c28b]">
                  Live
                </span>
              </div>

              <h3 className="mb-2 font-display text-3xl font-bold text-foreground">
                {product.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-accent">{product.tagline}</p>
              <p className="mb-6 text-sm leading-relaxed text-muted">{product.description}</p>

              <div className="mb-8 flex flex-wrap gap-2">
                {product.stack.map((tech) => (
                  <span key={tech} className="skill-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-accent/20 hover:shadow-accent/25 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-background shadow-md transition-all hover:-translate-y-px hover:shadow-lg"
                >
                  Open Live App ↗
                </a>
                <a
                  href={product.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* Browser mockup */}
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15"
            >
              {/* Chrome bar */}
              <div className="border-border/60 flex items-center gap-1.5 border-b px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--aur-rose)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--aur-amber)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--aur-lavender)]" />
                <span className="border-border/60 ml-3 flex-1 truncate rounded-md border bg-background px-3 py-1 text-center font-mono text-[10px] text-dim">
                  {product.url.replace("https://", "")}
                </span>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} dashboard`}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
