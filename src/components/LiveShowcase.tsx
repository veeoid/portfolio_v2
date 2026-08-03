import { useEffect, useRef, useState } from "react";

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
    url: "https://heywhatnow.vercel.app",
    repo: "https://github.com/veeoid/whatnow",
    image: "/images/project-whatnow.png",
    stack: ["Next.js", "Flask", "LangChain", "Groq", "Geoapify"],
  },
];

function BrowserMockup({ url, image, name }: { url: string; image: string; name: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={url}
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
          {url.replace("https://", "")}
        </span>
      </div>

      {/* Screenshot — fixed aspect so a missing image can't collapse the layout */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="grid grid-cols-3 gap-1 opacity-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-4 w-4 rounded-sm bg-foreground" />
              ))}
            </div>
            <span className="text-[11px] text-dim">Open the live app ↗</span>
          </div>
        ) : (
          <img
            src={image}
            alt={`${name} screenshot`}
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        )}
      </div>
    </a>
  );
}

export default function LiveShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

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

  // Track which slide is centered so the dots stay in sync.
  // Measured from real element positions so slide gaps can't desync it.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const r = child.getBoundingClientRect();
          const d = Math.abs(r.left + r.width / 2 - mid);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const child = trackRef.current?.children[i];
    child?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

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
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-label mb-3">In Production</p>
            <h2 className="font-display text-4xl font-bold text-foreground">Live Right Now</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Not just repos — deployed products you can open and use.
            </p>
          </div>

          {/* Arrows */}
          {LIVE_PRODUCTS.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(Math.max(0, active - 1))}
                disabled={active === 0}
                aria-label="Previous product"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={() => goTo(Math.min(LIVE_PRODUCTS.length - 1, active + 1))}
                disabled={active === LIVE_PRODUCTS.length - 1}
                aria-label="Next product"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Scroll-snap carousel */}
        <div
          ref={trackRef}
          className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-12 overflow-x-auto scroll-smooth px-6 md:-mx-12 md:gap-20 md:px-12"
        >
          {LIVE_PRODUCTS.map((product) => (
            <div key={product.name} className="w-full flex-shrink-0 snap-center">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
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

                <BrowserMockup url={product.url} image={product.image} name={product.name} />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        {LIVE_PRODUCTS.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {LIVE_PRODUCTS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-accent" : "w-1.5 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
