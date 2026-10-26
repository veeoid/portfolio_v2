import { useState } from "react";

interface Event {
  id: number;
  role: string;
  org: string;
  period: string;
  type: string;
  bullets: string[];
  category: "education" | "experience";
}

const events: Event[] = [
  {
    id: 1,
    role: "Software Engineer",
    org: "Ecolab",
    period: "Sept 2025 – Present",
    type: "Full-time",
    bullets: [
      "Design and maintain data pipelines from 10+ upstream systems, keeping backend services and reporting workflows supplied with reliable data.",
      "Built event-driven invalidation workflows with Azure Functions and Redis, cutting data freshness lag from hours to under a minute.",
      "Reduced analytical query execution time by 30% through SQL transformation and join optimization.",
      "Built a Python validation suite covering business logic checks, null validation, outlier detection, and explosive value guards across production pipelines.",
      "Run observability and anomaly monitoring across production pipelines, catching data quality failures before they reach downstream consumers.",
    ],
    category: "experience",
  },
  {
    id: 2,
    role: "Software Engineer Co-op",
    org: "Ecolab",
    period: "Aug 2024 – Aug 2025",
    type: "Co-op",
    bullets: [
      "Processed large datasets daily through batch workflows supporting backend services and application features.",
      "Reduced pipeline execution time by 25% by profiling and eliminating inefficient query patterns.",
      "Recovered a broken recommendation pipeline by tracing failures across ingestion, transformation, and inference stages.",
      "Developed .NET REST APIs in C# to expose processed data to Angular frontend applications.",
    ],
    category: "experience",
  },
  {
    id: 3,
    role: "Software Engineer",
    org: "Tata Consultancy Services",
    period: "Oct 2020 – Jul 2022",
    type: "Full-time",
    bullets: [
      "Developed .NET backend services for real-time trading systems using ActiveMQ, handling high-throughput messaging across distributed components.",
      "Optimized SQL Server queries and resolved data inconsistencies to keep high-volume daily trade data pipelines stable for a financial services client.",
    ],
    category: "experience",
  },
  {
    id: 4,
    role: "MS Computer Science",
    org: "Rochester Institute of Technology",
    period: "Aug 2022 – Dec 2025",
    type: "Graduate",
    bullets: [
      "Data Structures & Algorithms, AI, Machine Learning, Big Data Analytics, Distributed Systems, Database Implementation.",
    ],
    category: "education",
  },
  {
    id: 5,
    role: "BE Information Technology",
    org: "University of Mumbai",
    period: "Jul 2016 – Oct 2020",
    type: "Undergraduate",
    bullets: [
      "Operating Systems, DBMS, Computer Networking, Artificial Intelligence, Business Intelligence.",
    ],
    category: "education",
  },
];

function TimelineCard({ event, isLast, tone }: { event: Event; isLast: boolean; tone: string }) {
  const [open, setOpen] = useState(event.id === 1);
  const detailsId = `timeline-details-${event.id}`;

  return (
    <div className="relative flex gap-5">
      {/* Connector */}
      <div className="flex flex-col items-center">
        <div
          className="mt-1 h-3 w-3 flex-shrink-0 rounded-full border-2 transition-colors duration-200"
          style={
            open
              ? { borderColor: `var(--aur-${tone})`, backgroundColor: `var(--aur-${tone})` }
              : { borderColor: "var(--border)", backgroundColor: "var(--bg)" }
          }
        />
        {!isLast && <div className="mt-1 w-px flex-1 bg-border-subtle" />}
      </div>

      {/* Card */}
      <div
        className={`mb-6 flex-1 rounded-xl border transition-all duration-200 ${
          open ? "bg-surface" : "border-border bg-card hover:border-border-subtle"
        }`}
        style={
          open
            ? { borderColor: `color-mix(in srgb, var(--aur-${tone}) 40%, transparent)` }
            : undefined
        }
      >
        <button
          type="button"
          className="flex w-full items-start justify-between p-4 text-left"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={detailsId}
        >
          <span className="block">
            <span className="mb-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-sm font-semibold text-foreground">{event.role}</span>
              <span className="text-xs text-accent">@ {event.org}</span>
            </span>
            <span className="flex items-center gap-3">
              <span className="text-[11px] text-muted">{event.period}</span>
              <span className="rounded-sm bg-surface px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                {event.type}
              </span>
            </span>
          </span>
          <svg
            className={`mt-0.5 h-4 w-4 flex-shrink-0 text-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <div id={detailsId} hidden={!open} className="border-t border-border px-4 py-4">
          <ul className="space-y-2">
            {event.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-xs leading-relaxed text-muted">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const experience = events.filter((e) => e.category === "experience");
  const education = events.filter((e) => e.category === "education");

  return (
    <section id="timeline" className="relative overflow-hidden bg-background py-24 text-foreground">
      <div
        className="animate-blob-drift pointer-events-none absolute -left-24 top-1/3 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--aur-lavender) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Background</p>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Experience & Education
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Experience */}
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-2 w-2 rounded-full bg-[color:var(--aur-rose)]" />
              Experience
            </p>
            <div>
              {experience.map((e, i) => (
                <TimelineCard
                  key={e.id}
                  event={e}
                  isLast={i === experience.length - 1}
                  tone="rose"
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span className="h-2 w-2 rounded-full bg-[color:var(--aur-lavender)]" />
              Education
            </p>
            <div>
              {education.map((e, i) => (
                <TimelineCard
                  key={e.id}
                  event={e}
                  isLast={i === education.length - 1}
                  tone="lavender"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
