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
    period: "Sep 2025 – Present",
    type: "Full-time",
    bullets: [
      "Backend APIs and dashboards — Shipped product usage, service insights, and customer value features in ASP.NET Core APIs and Angular dashboards serving 4,000+ internal users, with regional and customer hierarchy filters.",
      "Snowflake release engineering — Replaced manual deployments across three environments with a Python engine and GitHub Actions, adding SQL validation, dependency ordering, hash-based idempotency, and OIDC.",
      "Cache consistency — Built selective Redis invalidation with a Python Azure Function that polls Snowflake processing logs, keeping API responses current within five minutes of refreshes.",
      "Production pricing system — Owned a Python application for 2,500+ SKUs globally, consolidating iterative reviews and implementing tested purchase-history fallback rules from requirements through production.",
    ],
    category: "experience",
  },
  {
    id: 2,
    role: "Software Engineering Co-op",
    org: "Ecolab",
    period: "Aug 2024 – Aug 2025",
    type: "Co-op",
    bullets: [
      "Recommendation systems — Built three Snowflake ML strategies for 1,000+ products using Apriori, KMeans, and SVD for co-purchases, segmentation, and similarity.",
      "Data quality tooling — Built a Streamlit and Snowpark validator to catch missing records and changed values before promotion across environments.",
      "Query optimization — Improved partition pruning for Snowflake queries behind production APIs and dashboards through clustering, SQL tuning, and object redesign.",
      "Pipeline verification — Wrote pytest suites for business rules, null handling, schemas, and ingested data to check production changes.",
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
      "Trading backend — Developed .NET services for real-time trading systems using ActiveMQ messaging across distributed components.",
      "Messaging migration — Verified trade processing, business rules, and eligibility decisions during a TIBCO-to-ActiveMQ transition.",
      "Regression automation — Replaced repeated manual release checks with reusable UFT, VBScript, and PowerShell scripts.",
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

function TimelineCard({ event }: { event: Event }) {
  const [open, setOpen] = useState(event.id === 1);
  const detailsId = `timeline-details-${event.id}`;

  return (
    <article className="border-t border-border py-5">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={detailsId}
      >
        <span className="block">
          <span className="block text-base font-semibold text-foreground">{event.role}</span>
          <span className="mt-1 block text-sm text-muted">{event.org} · {event.period}</span>
        </span>
        <span className="mt-1 text-xs font-medium text-accent" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div id={detailsId} hidden={!open} className="pt-5">
        <ul className="space-y-4">
          {event.bullets.map((bullet) => {
            const separator = bullet.indexOf(" — ");
            return (
              <li key={bullet} className="text-sm leading-relaxed text-muted">
                {separator >= 0 ? (
                  <>
                    <strong className="font-semibold text-foreground">
                      {bullet.slice(0, separator)}:
                    </strong>{" "}
                    {bullet.slice(separator + 3)}
                  </>
                ) : (
                  bullet
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default function Timeline() {
  const experience = events.filter((e) => e.category === "experience");
  const education = events.filter((e) => e.category === "education");

  return (
    <section id="timeline" className="border-b border-border bg-background py-24 text-foreground">
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Background</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Experience & Education
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Experience */}
          <div>
            <p className="section-label mb-6">Experience</p>
            <div>
              {experience.map((event) => (
                <TimelineCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="section-label mb-6">Education</p>
            <div>
              {education.map((event) => (
                <TimelineCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
