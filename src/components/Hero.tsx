export default function Hero() {
  return (
    <section id="about" className="flex min-h-[78vh] items-center border-b border-border bg-background pt-24 text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12">
        <div className="max-w-4xl">
          <p className="mb-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-base font-semibold text-foreground">
            Vismay Chaudhari
            <span className="text-sm font-normal text-muted">Software Engineer</span>
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
            I build backend and data services at Ecolab.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            I work across ASP.NET Core APIs, Snowflake CI/CD, Redis-backed services, and Python
            applications for pricing and reporting.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-accent transition-colors hover:text-foreground"
            >
              View selected work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
