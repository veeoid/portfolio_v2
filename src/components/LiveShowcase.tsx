const liveProjects = [
  {
    name: "ClaimVerifier",
    summary: "Damage claim review with a clear decision trail.",
    description:
      "A vision-language model reads claim photos, then a rules layer turns the findings into a supported, contradicted, or insufficient-evidence verdict. Built with a Next.js frontend, ASP.NET Core API, and FastAPI analysis service.",
    url: "https://claim-verifier-one.vercel.app",
    repo: "https://github.com/veeoid/claim-verifier",
    image: "/images/project-claim-verifier.png",
    stack: ["Next.js", "ASP.NET Core", "FastAPI", "PostgreSQL"],
  },
  {
    name: "WhatNow",
    summary: "Local plans built from real places.",
    description:
      "Pick a time, budget, mood, and way to travel. A scoring step ranks nearby venues, and a Flask service builds time-blocked itineraries from verified place data.",
    url: "https://heywhatnow.vercel.app",
    repo: "https://github.com/veeoid/whatnow",
    image: "/images/project-whatnow.png",
    stack: ["Next.js", "Flask", "LangChain", "Geoapify"],
  },
];

export default function LiveShowcase() {
  return (
    <section id="live" className="border-b border-border bg-background py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12">
          <p className="section-label mb-3">Built and deployed</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Live projects
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Applications you can open and try.
          </p>
        </div>

        <div className="space-y-14">
          {liveProjects.map((project) => (
            <article
              key={project.name}
              className="grid gap-8 border-t border-border pt-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center md:gap-12"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent">{project.summary}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-6 text-sm font-medium">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent pb-1 text-accent hover:text-foreground"
                  >
                    Open project ↗
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-border pb-1 text-foreground hover:border-accent hover:text-accent"
                  >
                    Source code ↗
                  </a>
                </div>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
                <img
                  src={project.image}
                  alt={`${project.name} interface`}
                  loading="lazy"
                  className="aspect-[16/10] w-full border border-border bg-card object-cover object-top"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
