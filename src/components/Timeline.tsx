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
      "Owned production PySpark ETL pipelines processing 50M+ Snowflake records daily across 170+ countries, reducing manual reporting by 40%.",
      "Expanded data quality enforcement with Great Expectations — 25+ validation rules, 99.7% production data accuracy.",
      "Integrated AppDynamics monitoring and alerting across 15+ production data workflows.",
      "Automated Snowflake ingestion and deployment via Azure DevOps CI/CD, improving deployment consistency by 85%.",
      "Built C# / .NET backend services powering Angular dashboards for 2M+ customers.",
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
      "Built PySpark data pipelines on Snowflake supporting global analytics and reporting.",
      "Implemented Great Expectations validation to catch schema and data quality issues early.",
      "Contributed to a hybrid recommendation system (Apriori, K-means, SVD) for SKU grouping and cross-sell analysis.",
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
      "Built .NET APIs to capture trade details and route them via ActiveMQ, replacing legacy TIBCO messaging in capital markets.",
      "Automated compliance validation workflows using VBScript and UFT.",
      "Queried and analyzed large transactional datasets in SQL Server for debugging and reporting.",
    ],
    category: "experience",
  },
  {
    id: 4,
    role: "Software Developer Intern",
    org: "Trivia Softwares",
    period: "Feb 2019 – Jul 2019",
    type: "Internship",
    bullets: [
      "Built a Student Database Management System in Python + SQLite.",
      "Developed an Android app in Java/XML to interface with the backend and sync data in real-time.",
    ],
    category: "experience",
  },
  {
    id: 5,
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
    id: 6,
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

function TimelineCard({ event, isLast }: { event: Event; isLast: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex gap-5">
      {/* Connector */}
      <div className="flex flex-col items-center">
        <div
          className={`mt-1 h-3 w-3 flex-shrink-0 rounded-full border-2 transition-colors duration-200 ${
            open ? "border-accent bg-accent" : "border-border bg-background"
          }`}
        />
        {!isLast && <div className="bg-border-subtle mt-1 w-px flex-1" />}
      </div>

      {/* Card */}
      <div
        className={`mb-6 flex-1 cursor-pointer rounded border transition-all duration-200 ${
          open ? "bg-surface border-accent/30" : "hover:border-border-subtle border-border bg-card"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start justify-between p-4">
          <div>
            <div className="mb-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <h4 className="text-sm font-semibold text-foreground">{event.role}</h4>
              <span className="text-xs text-accent">@ {event.org}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-muted">{event.period}</span>
              <span className="bg-surface rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                {event.type}
              </span>
            </div>
          </div>
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
        </div>

        {open && (
          <div className="border-t border-border px-4 py-4">
            <ul className="space-y-2">
              {event.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-xs leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const experience = events.filter((e) => e.category === "experience");
  const education = events.filter((e) => e.category === "education");

  return (
    <section id="timeline" className="bg-background py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
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
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Experience
            </p>
            <div>
              {experience.map((e, i) => (
                <TimelineCard key={e.id} event={e} isLast={i === experience.length - 1} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Education
            </p>
            <div>
              {education.map((e, i) => (
                <TimelineCard key={e.id} event={e} isLast={i === education.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
