export default function Hero() {
  return (
    <section id="about" className="flex min-h-[78vh] items-center border-b border-border bg-background pt-24 text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12">
        <div className="max-w-3xl">
          <p className="section-label mb-8">Software engineer</p>
          <h1 className="font-display text-6xl font-semibold leading-[0.98] tracking-[-0.065em] text-foreground sm:text-7xl lg:text-8xl">
            Vismay <span className="block">Chaudhari.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            At Ecolab, I build ASP.NET Core APIs, Snowflake release tooling, and Python
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
