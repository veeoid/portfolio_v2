import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20 text-foreground"
    >
      {/* Subtle warm glow — bottom left only */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)" }}
      />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-16 px-6 py-20 transition-all duration-1000 md:flex-row md:items-center md:px-12 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* ── Left: Text ── */}
        <div className="flex flex-1 flex-col">
          <p className="section-label mb-6">Software Engineer</p>

          <h1 className="font-display mb-0 text-6xl font-bold leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Vismay
          </h1>
          <h1 className="font-display mb-8 text-6xl font-bold leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Chaudhari
          </h1>

          <div className="mb-8 h-px w-12 bg-accent" />

          <p className="mb-4 max-w-sm text-sm uppercase tracking-widest text-muted">
            Backend · Data Engineering · Cloud
          </p>

          <p className="mb-10 max-w-[420px] text-base leading-relaxed text-muted md:text-lg">
            I build backend systems and data infrastructure that hold up under real load. My focus
            is on reliability and designing systems that stay clean as they grow.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-sm bg-accent px-6 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-px hover:bg-accent/90 hover:shadow-lg"
            >
              Selected Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border px-6 py-2.5 text-sm font-medium text-muted transition-all hover:-translate-y-px hover:border-accent hover:text-accent"
            >
              Resume ↗
            </a>
          </div>

          {/* Social */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/veeoid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vismay-chaudhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <div className="h-3 w-px bg-border" />
            <span className="text-xs text-muted">Seattle, WA</span>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="relative hidden flex-shrink-0 md:block">
          <div className="from-surface/90 relative h-[520px] w-80 overflow-hidden rounded-[1.75rem] border border-border/20 bg-gradient-to-br via-background/90 to-background/90 shadow-2xl shadow-black/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,151,58,0.18),_transparent_35%)]" />
            <img
              src="/regular.png"
              alt="Vismay Chaudhari"
              className="relative h-full w-full object-cover"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/85 to-transparent" />
          </div>
          {/* Offset amber border behind — gives depth */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[1.75rem] border border-accent/20" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <div className="h-10 w-px bg-foreground" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground">Scroll</span>
      </div>
    </section>
  );
}
