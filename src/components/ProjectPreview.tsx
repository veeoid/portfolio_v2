import { motion, AnimatePresence } from "framer-motion";

type Category = "web" | "ai" | "backend" | "cloud" | "networking";

interface Project {
  id: number;
  title: string;
  categories: Category[];
  description: string;
  link: string;
  technologies: string[];
  demo?: string;
  award?: string;
}

const PROJECT_HIGHLIGHTS: Record<number, { label: string; value: string }[]> = {
  15: [
    { label: "Services", value: "Next.js · .NET · FastAPI" },
    { label: "Verdicts", value: "Rules over VLM perception" },
  ],
  2: [
    { label: "Benchmarks", value: "TruthfulQA · HaluEval" },
    { label: "Grounding", value: "RAG + uncertainty scoring" },
  ],
  3: [
    { label: "Multi-cloud", value: "AWS · GCP · Azure" },
    { label: "Infra", value: "Kubernetes + Docker" },
  ],
  5: [
    { label: "Knowledge base", value: "OpenSearch + S3" },
    { label: "Foundation model", value: "AWS Bedrock" },
  ],
  6: [
    { label: "Auth", value: "JWT + session management" },
    { label: "Storage", value: "S3 image optimization" },
  ],
  7: [
    { label: "Execution", value: "Dynamic Kubernetes pods" },
    { label: "Monitoring", value: "Built-in runtime metrics" },
  ],
  8: [
    { label: "Caching", value: "Redis low-latency layer" },
    { label: "Keygen", value: "Collision-safe base-62" },
  ],
  10: [
    { label: "Recognition", value: "Real-time ASL gestures" },
    { label: "Output", value: "Speech synthesis bridge" },
  ],
  11: [
    { label: "Frontend", value: "Angular SPA" },
    { label: "Backend", value: ".NET Core · SQL Server" },
  ],
  12: [
    { label: "Data source", value: "TMDB API" },
    { label: "Favorites", value: "localStorage persistence" },
  ],
  13: [
    { label: "Databases", value: "PostgreSQL + MongoDB" },
    { label: "Focus", value: "Location-based patterns" },
  ],
  14: [
    { label: "Architecture", value: "Event-driven workflows" },
    { label: "Framework", value: "Discord.js v14" },
  ],
};

export default function ProjectPreview({
  project,
  isVisible,
}: {
  project: Project;
  isVisible: boolean;
}) {
  const CodeCue = () => (
    <pre className="mt-1 overflow-x-auto rounded-md bg-background px-3 py-2.5 text-[10.5px] leading-relaxed text-muted">
      {`const map = new Map();
for (let i = 0; i < nums.length; i++) {
  const need = target - nums[i];
  if (map.has(need)) return [map.get(need), i];
  map.set(nums[i], i);
}`}
    </pre>
  );

  const BugBlamer = () => {
    const steps = ["Upload CI Log", "Extract Diffs", "Run RAG + LLM", "Rank Commits"];
    return (
      <div className="mt-1 space-y-1.5">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 rounded bg-background px-2.5 py-1.5"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/15 text-[9px] font-medium text-accent">
              {i + 1}
            </span>
            <span className="text-[11px] text-foreground">{s}</span>
          </motion.div>
        ))}
        <div className="mt-2">
          <div className="mb-1 text-[10px] text-muted">Commit confidence</div>
          <div className="h-1.5 w-full rounded-full bg-background">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-1.5 rounded-full bg-accent"
            />
          </div>
        </div>
      </div>
    );
  };

  const TcpViz = () => (
    <div className="mt-1">
      <div className="relative h-8 rounded-md bg-background">
        <div className="absolute inset-y-0 left-3 right-3 flex items-center">
          <div className="h-0.5 w-full rounded bg-border" />
        </div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "calc(100% - 28px)" }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear", repeatDelay: 0.4 }}
          className="absolute left-3 top-1/2 h-3 w-6 -translate-y-1/2 rounded bg-accent"
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-dim">
        <span>Client</span>
        <span>Packet framing</span>
        <span>Server</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {["SYN", "SYN·ACK", "ACK"].map((s) => (
          <div key={s} className="rounded bg-background px-1.5 py-1 text-center text-[9px] text-muted">
            {s}
          </div>
        ))}
      </div>
    </div>
  );

  const Highlights = () => {
    const highlights = PROJECT_HIGHLIGHTS[project.id] ?? [];
    return (
      <div className="mt-1 space-y-1.5">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="flex items-center justify-between rounded bg-background px-2.5 py-1.5"
          >
            <span className="text-[10px] uppercase tracking-wide text-dim">{h.label}</span>
            <span className="text-[11px] font-medium text-foreground">{h.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (project.id === 9) return <CodeCue />;
    if (project.id === 4) return <BugBlamer />;
    if (project.id === 1) return <TcpViz />;
    return <Highlights />;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="pointer-events-auto absolute inset-0 z-30 flex flex-col rounded-[1.75rem] border border-border bg-card p-5 shadow-xl"
        >
          {/* Window chrome */}
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[color:var(--aur-rose)]" />
            <span className="h-2 w-2 rounded-full bg-[color:var(--aur-amber)]" />
            <span className="h-2 w-2 rounded-full bg-[color:var(--aur-lavender)]" />
          </div>

          {/* Title + categories */}
          <div className="border-b border-border-subtle pb-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold leading-snug text-foreground">{project.title}</h3>
              {project.award && (
                <span className="shrink-0 rounded-full bg-accent/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accent">
                  {project.award}
                </span>
              )}
            </div>
            <div className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5">
              {project.categories.map((cat, i) => (
                <span
                  key={cat}
                  className="text-[10px] uppercase tracking-wider"
                  style={{
                    color: `var(--aur-${(["rose", "lavender", "amber"] as const)[i % 3]})`,
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-[12px] leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Visualization or highlights */}
          <div className="mt-2">{renderContent()}</div>

          {/* Tech pills */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-dim"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-dim">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="mt-3 flex gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-accent px-3 py-1.5 text-[11px] font-medium text-background"
              >
                {project.demo.includes("youtu")
                  ? "Watch Demo"
                  : project.demo.includes("devpost")
                    ? "Devpost"
                    : "Live App"}
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded border border-border px-3 py-1.5 text-[11px] text-accent"
            >
              GitHub
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
