import { useEffect, useRef, useState } from "react";
import ProjectPreview from "./ProjectPreview";

interface Project {
  id: number;
  title: string;
  categories: ("web" | "ai" | "backend" | "cloud" | "networking")[];
  description: string;
  link: string;
  technologies: string[];
  image?: string;
  demo?: string;
  video?: string;
  award?: string;
}

type Tab = "all" | "web" | "ai" | "backend" | "cloud" | "networking";

const allProjects: Project[] = [
  {
    id: 15,
    title: "Claim Verifier: AI Damage Claims",
    categories: ["ai", "web", "backend"],
    description:
      "AI-assisted damage claim verification, a vision-language model inspects claim photos, then a deterministic rule layer turns that perception into a verdict (supported, contradicted, or insufficient evidence), surfaced on a dashboard.",
    link: "https://github.com/veeoid/claim-verifier",
    technologies: ["Next.js", "ASP.NET Core", "FastAPI", "PostgreSQL", "Gemini VLM", "Docker"],
    image: "/images/project-claim-verifier.png",
    demo: "https://claim-verifier-one.vercel.app",
    award: "Live",
  },
  {
    id: 16,
    title: "WhatNow: Contextual Q&A",
    categories: ["web", "ai"],
    description:
      "Web application that provides contextual question answering using a combination of Next.js frontend, Flask backend, LangChain for LLM orchestration, and TypeScript for type safety.",
    link: "https://github.com/veeoid/what-now",
    technologies: ["Next.js", "Flask", "LangChain", "TypeScript", "Geoapify"],
    image: "/images/project-whatnow.png",
    demo: "https://heywhatnow.vercel.app",
  },
  {
    id: 1,
    title: "Custom TCP Protocol From Scratch",
    categories: ["networking"],
    description:
      "Binary application-level protocol built directly on raw TCP — message framing, stream-safe parsing, state machine enforcement, and structured error handling. No HTTP, no protocol libraries.",
    link: "https://github.com/veeoid/CustomTCP-Protocol",
    technologies: ["Node.js", "TCP Sockets", "Binary Protocol", "State Machines"],
    image: "/images/project-custom-tcp-protocol.png",
    demo: "https://devpost.com/software/custom-tcp-protocol",
    award: "Hackathon Winner",
  },
  {
    id: 2,
    title: "Hallucination Detection in LLMs",
    categories: ["ai"],
    description:
      "Evaluation and mitigation pipeline for detecting LLM hallucinations using structured benchmarks, retrieval-based grounding, and uncertainty scoring.",
    link: "https://github.com/veeoid/hallucinations_detect_mitigate",
    technologies: ["Python", "LLaMA", "Sentence Transformers", "RAG"],
    image: "/images/project-hallucinations.png",
  },
  {
    id: 3,
    title: "CloudMart eCommerce + AI",
    categories: ["web", "backend", "ai", "cloud"],
    description:
      "E-commerce platform integrating AI services for product recommendations, customer support, and sentiment analysis across AWS, GCP, and Azure.",
    link: "https://github.com/veeoid/cloudmart",
    technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "React", "Node.js"],
    image: "/images/project-cloudmart.png",
  },
  {
    id: 4,
    title: "BugBlamer: CI Root Cause Detection",
    categories: ["ai", "backend", "cloud"],
    description:
      "AI-powered tool that identifies the most likely commit responsible for a CI/CD failure using Groq's LLaMA model and GitLab API.",
    link: "https://github.com/veeoid/bugblamer",
    technologies: ["FastAPI", "Groq API", "GitLab API", "GCP Cloud Run", "Docker"],
    image: "/images/project-bugblamer.png",
    demo: "https://devpost.com/software/bugblamer",
  },
  {
    id: 5,
    title: "Valorant AI Chatbot",
    categories: ["ai", "cloud"],
    description:
      "AWS Bedrock-powered Q&A app for interactive game knowledge queries, backed by a curated OpenSearch knowledge base.",
    link: "https://github.com/Nidhzzz/vct_hackathon",
    technologies: ["AWS Bedrock", "OpenSearch", "S3", "Python", "Streamlit"],
    image: "/images/project-valorant.png",
    demo: "https://youtu.be/OUfsfUHq2Kk",
  },
  {
    id: 6,
    title: "Memoir: Blog Platform",
    categories: ["web", "backend"],
    description:
      "Full-stack blog platform with authentication, content management, image optimization, and a clean reading experience.",
    link: "https://github.com/veeoid/memoir",
    technologies: ["React", "Django", "PostgreSQL", "AWS", "TypeScript"],
    image: "/images/project-memoir.png",
  },
  {
    id: 7,
    title: "Serverless Function Platform",
    categories: ["backend", "cloud"],
    description:
      "Platform for executing user-defined functions dynamically inside a Kubernetes environment, with built-in monitoring.",
    link: "https://github.com/veeoid/Serverless-Function-Development-Platform.git",
    technologies: ["Python", "Django", "Kubernetes", "Docker", "REST APIs"],
    image: "/images/project-serverless.png",
  },
  {
    id: 8,
    title: "URL Shortener",
    categories: ["backend", "cloud"],
    description:
      "Backend service for generating, storing, and resolving short URLs with low-latency Redis caching, analytics, and collision-safe key generation.",
    link: "https://github.com/veeoid/URL-Shortner",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
    image: "/images/project-url-shortener.png",
  },
  {
    id: 9,
    title: "CodeCue: AI LeetCode Assistant",
    categories: ["web", "ai"],
    description:
      "Chrome extension that provides instant AI-driven explanations and structured hints for LeetCode problems without spoiling the solution.",
    link: "https://github.com/veeoid/Code-Cue",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Groq API"],
    image: "/images/project-codecue.png",
    demo: "https://youtu.be/NGHlcNSlkfw",
  },
  {
    id: 10,
    title: "Sign Language Virtual Assistant",
    categories: ["ai"],
    description:
      "System that enables deaf-mute users to interact with voice assistants using computer vision and deep learning gesture recognition.",
    link: "https://github.com/veeoid/Sign_Language_Recognition_for_Digitial_Assistants",
    technologies: ["Python", "OpenCV", "TensorFlow", "Speech Recognition"],
    image: "/images/project-signlanguage.png",
  },
  {
    id: 11,
    title: "TechTonic: Business Management",
    categories: ["web", "backend"],
    description:
      "Full-stack business management system with customer management, inventory tracking, and analytics dashboards.",
    link: "https://github.com/veeoid/TechTonic",
    technologies: ["Angular", ".NET Core", "SQL Server", "Entity Framework", "C#"],
    image: "/images/project-techtonic.png",
  },
  {
    id: 12,
    title: "MovieVault",
    categories: ["web"],
    description:
      "Responsive React movie explorer powered by TMDB API — search, browse trending films, and save favorites locally.",
    link: "https://github.com/veeoid/movie-app",
    technologies: ["React", "Vite", "TMDB API", "JavaScript", "Context API"],
    image: "/images/project-movie.png",
  },
  {
    id: 13,
    title: "Instagram Trend Analysis",
    categories: ["backend"],
    description:
      "Data analysis project uncovering location-based posting patterns in Instagram behavior using PostgreSQL and MongoDB.",
    link: "https://github.com/veeoid/Instagram_Trend_Analysis",
    technologies: ["PostgreSQL", "MongoDB", "Python", "Data Analysis"],
    image: "/images/project-instatrend.png",
  },
  {
    id: 14,
    title: "Discord Automation Bot",
    categories: ["backend"],
    description:
      "Discord bot automating moderation, command handling, and real-time interactions using event-driven workflows.",
    link: "https://github.com/veeoid/DiscordBot",
    technologies: ["Node.js", "Discord.js", "Event Driven Systems"],
    image: "/images/project-discord-bot.png",
  },
];

const TABS: { label: string; value: Tab }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "AI & ML", value: "ai" },
  { label: "Backend", value: "backend" },
  { label: "Cloud", value: "cloud" },
  { label: "Networking", value: "networking" },
];

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => void 0);
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => {
        setHovered(true);
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        handleMouseLeave();
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/15"
      >
        {/* Retro window chrome */}
        <div className="border-border/60 flex items-center gap-1.5 border-b px-5 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[color:var(--aur-rose)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--aur-amber)]" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--aur-lavender)]" />
          <span className="ml-2 truncate font-mono text-[10px] text-dim">
            ~/{project.title.toLowerCase().split(":")[0].replace(/\s+/g, "-")}
          </span>
        </div>

        {/* Thumbnail */}
        <div className="border-border/20 relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] border bg-card shadow-inner shadow-black/10">
          {project.video ? (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              poster={project.image}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            /* Placeholder when no media */
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1 opacity-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded-sm bg-surface" />
                ))}
              </div>
            </div>
          )}

          {/* Hover overlay with arrow */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/20 group-hover:opacity-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/20 backdrop-blur-sm">
              <svg
                className="h-5 w-5"
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
            </div>
          </div>

          {/* Video badge */}
          {project.video && (
            <div className="bg-background/80 absolute left-3 top-3 flex items-center gap-1 rounded px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-accent backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Video
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="mb-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-3 py-1 text-[11px] text-dim"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="bg-surface/70 rounded-full px-3 py-1 text-[11px] text-dim">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </a>

      <div className="pointer-events-none md:pointer-events-auto">
        <ProjectPreview project={project} isVisible={hovered} />
      </div>
    </div>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const filtered =
    activeTab === "all" ? allProjects : allProjects.filter((p) => p.categories.includes(activeTab));

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24 text-foreground">
      <div
        className="animate-blob-drift pointer-events-none absolute -top-24 right-[-6%] h-[420px] w-[420px] rounded-full opacity-[0.09] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--aur-rose) 0%, transparent 60%)" }}
      />
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-1000 md:px-12 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">Work</p>
          <h2 className="font-display text-4xl font-bold text-foreground">Selected Projects</h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                activeTab === tab.value
                  ? "shadow-accent/25 bg-accent text-background shadow-md"
                  : "border border-border text-muted hover:border-border-subtle hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 border-t border-border pt-10 text-center">
          <a
            href="https://github.com/veeoid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            More on GitHub
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
      </div>
    </section>
  );
}
