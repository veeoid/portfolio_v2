import { useState } from "react";

interface Project {
  id: number;
  title: string;
  categories: ("fullstack" | "ai" | "backend" | "cloud" | "networking")[];
  description: string;
  link: string;
  technologies: string[];
  image?: string;
  demo?: string;
  video?: string;
  award?: string;
}

type Tab = "all" | "fullstack" | "ai" | "backend" | "cloud" | "networking";

const allProjects: Project[] = [
  {
    id: 7,
    title: "Serverless Function Platform",
    categories: ["backend", "cloud"],
    description:
      "Prototype exploring function-submission APIs and Kubernetes job orchestration. Django endpoints manage submissions and job status, with CPU and memory measurements to inspect execution behavior.",
    link: "https://github.com/veeoid/Serverless-Function-Development-Platform.git",
    technologies: ["Python", "Django", "Kubernetes", "Docker", "REST APIs"],
    image: "/images/project-serverless.png",
  },
  {
    id: 4,
    title: "BugBlamer: CI Root Cause Detection",
    categories: ["ai", "backend", "cloud"],
    description:
      "CI debugging assistant that combines GitLab commit diffs and failed-job logs with LLM analysis to suggest likely causes for investigation. A FastAPI service exposes the workflow and runs in a Docker container on Cloud Run.",
    link: "https://github.com/veeoid/bugblamer",
    technologies: ["Python", "FastAPI", "GitLab API", "GCP Cloud Run", "Docker"],
    image: "/images/project-bugblamer.png",
    demo: "https://devpost.com/software/bugblamer",
  },
  {
    id: 9,
    title: "CodeCue: AI LeetCode Assistant",
    categories: ["fullstack", "ai"],
    description:
      "Chrome extension that provides instant AI-driven explanations and structured hints for LeetCode problems without spoiling the solution.",
    link: "https://github.com/veeoid/Code-Cue",
    technologies: ["React", "TypeScript", "Node.js", "Express"],
    image: "/images/project-codecue.png",
    demo: "https://youtu.be/NGHlcNSlkfw",
  },
  {
    id: 5,
    title: "Valorant RAG Assistant (Team Project)",
    categories: ["ai", "cloud"],
    description:
      "Co-developed a Streamlit assistant using Amazon Bedrock Knowledge Bases to retrieve game context from S3 data. Prompts define team-composition constraints, player roles and supporting reasoning for generated recommendations.",
    link: "https://github.com/Nidhzzz/vct_hackathon",
    technologies: ["Amazon Bedrock", "S3", "Python", "Streamlit"],
    image: "/images/project-valorant.png",
    demo: "https://youtu.be/OUfsfUHq2Kk",
  },
  {
    id: 1,
    title: "Custom TCP Protocol From Scratch",
    categories: ["networking"],
    description:
      "Binary protocol built on TCP sockets with length-prefixed framing, connection-state handling and structured errors. A buffered parser retains incomplete frames and processes multiple messages arriving in one chunk.",
    link: "https://github.com/veeoid/CustomTCP-Protocol",
    technologies: ["Node.js", "TCP Sockets", "Binary Protocol", "State Machines"],
    image: "/images/project-custom-tcp-protocol.png",
    demo: "https://devpost.com/software/custom-tcp-protocol",
    award: "Hackathon Winner",
  },
  {
    id: 2,
    title: "Hallucination Detection in LLMs",
    categories: ["ai", "backend"],
    description:
      "LLM evaluation pipeline using sentence embeddings and agglomerative clustering to score semantic uncertainty. Adds retrieval-grounded revisions and citation-or-abstention checks, with precision, recall, F1 and DeBERTa-based reference-consistency evaluation.",
    link: "https://github.com/veeoid/hallucinations_detect_mitigate",
    technologies: ["Python", "Sentence Transformers", "scikit-learn", "DeBERTa"],
    image: "/images/project-hallucinations.png",
  },
  {
    id: 3,
    title: "CloudMart eCommerce + AI",
    categories: ["fullstack", "backend", "ai", "cloud"],
    description:
      "Cloud engineering project combining a React and Node.js storefront with container deployment on EKS, Terraform infrastructure, DynamoDB and Lambda-based data flows, and AI service integrations.",
    link: "https://github.com/veeoid/cloudmart",
    technologies: ["React", "Node.js", "AWS EKS", "DynamoDB", "Docker", "Terraform"],
    image: "/images/project-cloudmart.png",
  },
  {
    id: 15,
    title: "Claim Verifier: AI Damage Claims",
    categories: ["ai", "fullstack"],
    description:
      "Damage-claim application separating vision-model observations from deterministic claim decisions. An ASP.NET Core API saves submissions in PostgreSQL before FastAPI analysis, preserving claims and tracking analysis failures when inference is unavailable.",
    link: "https://github.com/veeoid/claim-verifier",
    technologies: ["Next.js", "ASP.NET Core", "FastAPI", "PostgreSQL", "Docker"],
    image: "/images/project-claim-verifier.png",
    demo: "https://claim-verifier-one.vercel.app",
    award: "Live",
  },
  {
    id: 16,
    title: "WhatNow: Local Itinerary Planner",
    categories: ["fullstack", "ai"],
    description:
      "Itinerary planner combining a Flask and LangChain agent with Geoapify place search. Typed tools retrieve nearby venues while Python logic checks time and cost constraints, turning a user's location, budget and preferences into suggested plans.",
    link: "https://github.com/veeoid/whatnow",
    technologies: ["Next.js", "Flask", "LangChain", "TypeScript", "Geoapify"],
    image: "/images/project-whatnow.png",
    demo: "https://heywhatnow.vercel.app",
  },
  {
    id: 6,
    title: "Memoir: Blog Platform",
    categories: ["fullstack", "backend"],
    description:
      "Full-stack blog platform with authentication, content management, image optimization, and a clean reading experience.",
    link: "https://github.com/veeoid/memoir",
    technologies: ["React", "Django", "PostgreSQL", "AWS", "TypeScript"],
    image: "/images/project-memoir.png",
  },
  {
    id: 8,
    title: "URL Shortener",
    categories: ["backend", "cloud"],
    description:
      "Node.js and Express service for creating short links, storing URL mappings in MongoDB and redirecting requests to their original destinations.",
    link: "https://github.com/veeoid/URL-Shortner",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "/images/project-url-shortener.png",
  },
  {
    id: 10,
    title: "Sign Language Virtual Assistant",
    categories: ["ai"],
    description:
      "Computer-vision prototype using TensorFlow transfer learning and OpenCV to classify hand gestures from a webcam, connecting recognized gestures to spoken commands for a digital assistant.",
    link: "https://github.com/veeoid/Sign_Language_Recognition_for_Digitial_Assistants",
    technologies: ["Python", "OpenCV", "TensorFlow", "Speech Recognition"],
    image: "/images/project-signlanguage.png",
  },
  {
    id: 11,
    title: "TechTonic: Business Management",
    categories: ["fullstack", "backend"],
    description:
      "Full-stack business management system with customer management, inventory tracking, and analytics dashboards.",
    link: "https://github.com/veeoid/TechTonic",
    technologies: ["Angular", ".NET Core", "SQL Server", "Entity Framework", "C#"],
    image: "/images/project-techtonic.png",
  },
  {
    id: 12,
    title: "MovieVault",
    categories: ["fullstack"],
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
      "Discord utility bot implementing slash commands and interactive responses with Node.js and Discord.js event handlers.",
    link: "https://github.com/veeoid/DiscordBot",
    technologies: ["Node.js", "Discord.js"],
    image: "/images/project-discord-bot.png",
  },
];

const TABS: { label: string; value: Tab }[] = [
  { label: "All", value: "all" },
  { label: "Fullstack", value: "fullstack" },
  { label: "AI & ML", value: "ai" },
  { label: "Backend", value: "backend" },
  { label: "Cloud", value: "cloud" },
  { label: "Networking", value: "networking" },
];

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="flex h-full flex-col overflow-hidden border border-border bg-card">
      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={`${project.title} interface`}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            Preview unavailable
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {project.award && (
          <p className="section-label mb-2">{project.award}</p>
        )}
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <p className="mt-5 text-xs leading-relaxed text-dim">
          {project.technologies.join(" · ")}
        </p>
        <div className="mt-6 flex items-center gap-5 text-sm font-medium">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-border pb-1 text-foreground hover:border-accent hover:text-accent"
          >
            Source ↗
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent pb-1 text-accent hover:text-foreground"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTab === "all" ? allProjects : allProjects.filter((p) => p.categories.includes(activeTab));
  const visibleProjects = activeTab === "all" && !showAll ? filtered.slice(0, 6) : filtered;

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">Work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Selected projects</h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              aria-pressed={activeTab === tab.value}
              className={`border-b-2 pb-3 text-xs font-medium tracking-wide transition-colors ${
                activeTab === tab.value
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {activeTab === "all" && (
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="mt-8 border-b border-accent pb-1 text-sm font-medium text-accent hover:text-foreground"
          >
            {showAll ? "Show fewer projects" : `Show all ${allProjects.length} projects`}
          </button>
        )}

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
