import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  categories: ("web" | "ai" | "backend" | "cloud")[]; // added "cloud"
  description: string;
  link: string;
  technologies: string[];
  image?: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "web" | "ai" | "backend" | "cloud">("all");
  const [showAllTech, setShowAllTech] = useState<{ [id: number]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const allProjects: Project[] = [
    {
      id: 1,
      title: "CodeCue: AI-Powered LeetCode Assistant",
      categories: ["web", "ai"],
      description:
        "Chrome extension designed to enhance LeetCode problem-solving with instant AI-driven support and structured explanations.",
      link: "https://github.com/veeoid/Code-Cue",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Groq API", "Chrome Extension"],
      image: "/images/project-codecue.png",
    },
    {
      id: 2,
      title: "Hallucination Detection and Mitigation in LLMs",
      categories: ["ai"],
      description:
        "Built an evaluation and mitigation pipeline to detect hallucinations in LLM outputs using structured benchmarks, retrieval-based grounding, and uncertainty scoring.",
      link: "https://github.com/veeoid/hallucinations_detect_mitigate",
      technologies: ["Python", "LLaMA", "Sentence Transformers", "Retrieval Augmentation"],
      image: "/images/project-hallucinations.png",
    },

    {
      id: 3,
      title: "CloudMart eCommerce with AI Integration",
      categories: ["web", "backend", "ai", "cloud"], // added "cloud"
      description:
        "A modern e-commerce platform that integrates AI services for product recommendations, customer support, and sentiment analysis.",
      link: "https://github.com/veeoid/cloudmart",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "React", "Node.js"],
      image: "/images/project-cloudmart.png",
    },

    {
      id: 4,
      title: "BugBlamer: Root Cause Detection for CI Failures",
      categories: ["ai", "backend", "cloud"], // added "cloud"
      description:
        "AI-powered web app that identifies the most likely commit responsible for CI/CD failures using Groq's LLaMA model and GitLab API integration.",
      link: "https://github.com/veeoid/bugblamer",
      technologies: [
        "FastAPI",
        "Groq API",
        "GitLab API",
        "Google Cloud Run",
        "Google Cloud Build",
        "Docker",
        "Jinja2",
        "Python",
      ],
      image: "/images/project-bugblamer.png",
    },
    {
      id: 5,
      title: "Valorant AI Chatbot",
      categories: ["ai", "cloud"], // added "cloud"
      description:
        "AWS Bedrock LLM-powered chat app for interactive Q&A, providing insightful answers from a curated knowledge base.",
      link: "https://github.com/Nidhzzz/vct_hackathon",
      technologies: ["AWS Bedrock", "AWS OpenSearch", "AWS S3", "Python", "Streamlit"],
      image: "/images/project-valorant.png",
    },
    {
      id: 6,
      title: "Memoir: Blog Platform",
      categories: ["web", "backend"],
      description:
        "A blog platform with user authentication, content management, image optimization, and seamless browsing experience.",
      link: "https://github.com/veeoid/memoir",
      technologies: ["React", "Django", "PostgreSQL", "AWS", "TypeScript"],
      image: "/images/project-memoir.png",
    },
    {
      id: 7,
      title: "Serverless Function Platform",
      categories: ["backend", "cloud"], // added "cloud"
      description:
        "Platform for executing tasks/functions dynamically within a Kubernetes environment with monitoring capabilities.",
      link: "https://github.com/veeoid/Serverless-Function-Development-Platform.git",
      technologies: ["Python", "Django", "Kubernetes", "Docker", "REST APIs"],
      image: "/images/project-serverless.png",
    },
    {
    id: 8,
    title: "URL Shortener",
    categories: ["backend", "cloud"],
    description:
      "Built a backend service to generate, store, and resolve short URLs with low-latency lookups, basic analytics, and collision-safe key generation.",
    link: "https://github.com/veeoid/URL-Shortner",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "REST APIs"],
    image: "/images/project-url-shortener.png",
  },

    {
      id: 9,
      title: "Virtual Assistant with Sign Language",
      categories: ["ai"],
      description:
        "Application that enables deaf-mutes to communicate with Virtual Voice Assistants using computer vision and deep learning.",
      link: "https://github.com/veeoid/Sign_Language_Recognition_for_Digitial_Assistants",
      technologies: ["Python", "OpenCV", "TensorFlow", "Speech Recognition"],
      image: "/images/project-signlanguage.png",
    },
        {
      id: 10,
      title: "TechTonic: Business Management System",
      categories: ["web", "backend"],
      description:
        "Full-stack business management solution with customer management, inventory tracking, and business analytics features.",
      link: "https://github.com/veeoid/TechTonic",
      technologies: ["Angular", ".NET Core", "SQL Server", "Entity Framework", "TypeScript", "C#"],
      image: "/images/project-techtonic.png",
    },
    {
      id: 11,
      title: "MovieVault - Search & Save Movies using TMDB API",
      categories: ["web"],
      description:
        "A responsive React-based movie exploration app powered by TMDB API, allowing users to search movies, browse trending films, and save their favorites locally.",
      link: "https://github.com/veeoid/movie-app",
      technologies: ["React", "Vite", "TMDB API", "JavaScript", "Context API", "CSS"],
      image: "/images/project-movie.png",
    },
    {
      id: 12,
      title: "Instagram Trend Analysis",
      categories: ["backend"],
      description:
        "Data analysis project to uncover patterns in user behavior on Instagram, particularly related to location-based posting.",
      link: "https://github.com/veeoid/Instagram_Trend_Analysis",
      technologies: ["PostgreSQL", "MongoDB", "Python", "Data Analysis"],
      image: "/images/project-instatrend.png",
    },
    {
      id: 13,
      title: "Discord Automation Bot",
      categories: ["backend"],
      description:
        "Developed a Discord bot to automate moderation, command handling, and real-time interactions using event-driven workflows.",
      link: "https://github.com/veeoid/DiscordBot",
      technologies: ["Node.js", "Discord.js", "APIs", "Event Driven Systems"],
      image: "/images/project-discord-bot.png",
    }

  ];

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.categories.includes(activeTab));

  const tabClasses = (tab: "all" | "web" | "ai" | "backend" | "cloud") => `
    px-4 py-2 rounded-full text-sm font-medium
    ${
      activeTab === tab
        ? "bg-[#6cccb4] text-black"
        : "bg-[#222] text-gray-300 hover:bg-[#333] hover:text-white"
    }
    transition-all duration-300 cursor-pointer
  `;

  return (
    <section id="projects" className="relative bg-black py-20 text-white">
      <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden opacity-5">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#6cccb4] blur-3xl filter"></div>
        <div className="absolute -right-20 top-60 h-60 w-60 rounded-full bg-[#cdaa57] blur-3xl filter"></div>
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#a15852] blur-3xl filter"></div>
      </div>

      <div
        className={`container relative z-10 mx-auto px-6 transition-all duration-1000 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <h2 className="relative inline-flex flex-col text-4xl font-bold">
            <span>Projects</span>
            <span className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57]"></span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Here's a collection of my latest work spanning web applications, AI solutions, and data
            engineering projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button onClick={() => setActiveTab("all")} className={tabClasses("all")}>
            All Projects
          </button>
          <button onClick={() => setActiveTab("web")} className={tabClasses("web")}>
            Web Development
          </button>
          <button onClick={() => setActiveTab("ai")} className={tabClasses("ai")}>
            AI & ML
          </button>
          <button onClick={() => setActiveTab("backend")} className={tabClasses("backend")}>
            Backend & Data
          </button>
          <button onClick={() => setActiveTab("cloud")} className={tabClasses("cloud")}>
            Cloud
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="w-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#222] bg-gradient-to-br from-[#111] to-[#191919] transition-all duration-500 hover:-translate-y-1 hover:border-[#444] hover:shadow-xl hover:shadow-[#6cccb4]/10"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {/* Overlay with emojis - only visible on hover */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-[#222] to-[#111] opacity-0 transition-opacity group-hover:opacity-90">
                    <span className="flex gap-2 text-5xl opacity-20">
                      {project.categories.map((cat) =>
                        cat === "web"
                          ? "🌐"
                          : cat === "ai"
                            ? "🤖"
                            : cat === "backend"
                              ? "⚙️"
                              : cat === "cloud"
                                ? "☁️"
                                : null,
                      )}
                    </span>
                  </div>
                  {/* Category labels */}
                  <div className="absolute right-3 top-3 z-20 flex gap-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded bg-black/70 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                      >
                        {cat === "web" && "Web Development"}
                        {cat === "ai" && "AI & ML"}
                        {cat === "backend" && "Backend & Data"}
                        {cat === "cloud" && "Cloud"}
                      </span>
                    ))}
                  </div>
                  {/* Project image */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 z-0 h-full w-full bg-black object-cover object-center"
                      loading="lazy"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="transform rounded-full border-2 border-[#6cccb4] px-4 py-2 text-sm font-medium text-[#6cccb4] transition-transform duration-300 group-hover:scale-105">
                      View Project
                    </div>
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#6cccb4]">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-grow text-sm text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {(showAllTech[project.id]
                      ? project.technologies
                      : project.technologies.slice(0, 6)
                    ).map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-[#333] bg-black/80 px-2 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <button
                        className="text-xs text-gray-400 underline transition hover:text-[#6cccb4]"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowAllTech((prev) => ({
                            ...prev,
                            [project.id]: !prev[project.id],
                          }));
                        }}
                      >
                        {showAllTech[project.id]
                          ? "Show less"
                          : `+${project.technologies.length - 6} more`}
                      </button>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/veeoid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-[#6cccb4] to-[#6cccb4]/80 px-8 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6cccb4]/20"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            See All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
