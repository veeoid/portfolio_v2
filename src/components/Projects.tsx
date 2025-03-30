import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ai' | 'backend'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const allProjects: Project[] = [
    {
      id: 1,
      title: "CodeCue: AI-Powered LeetCode Assistant",
      category: "web",
      description: "Chrome extension designed to enhance LeetCode problem-solving with instant AI-driven support and structured explanations.",
      link: "https://github.com/veeoid/Code-Cue",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Groq API", "Chrome Extension"],
      image: "/images/project-codecue.jpg"
    },
    {
      id: 2,
      title: "CloudMart eCommerce with AI Integration",
      category: "web",
      description: "A modern e-commerce platform that integrates AI services for product recommendations, customer support, and sentiment analysis.",
      link: "https://github.com/veeoid/cloudmart",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Node.js"],
      image: "/images/project-cloudmart.jpg"
    },
    {
      id: 3,
      title: "TechTonic: Business Management System",
      category: "backend",
      description: "Full-stack business management solution with customer management, inventory tracking, and business analytics features.",
      link: "https://github.com/veeoid/TechTonic",
      technologies: ["Angular", ".NET Core", "SQL Server", "Entity Framework", "TypeScript", "C#"],
      image: "/images/project-techtonic.jpg"
    },
    {
      id: 4,
      title: "Valorant AI Chatbot",
      category: "ai",
      description: "AWS Bedrock LLM-powered chat app for interactive Q&A, providing insightful answers from a curated knowledge base.",
      link: "https://github.com/Nidhzzz/vct_hackathon",
      technologies: ["AWS Bedrock", "AWS OpenSearch", "AWS S3", "Python", "Streamlit"],
      image: "/images/project-valorant.jpg"
    },
    {
      id: 5,
      title: "Memoir: Blog Platform",
      category: "web",
      description: "A blog platform with user authentication, content management, image optimization, and seamless browsing experience.",
      link: "https://github.com/veeoid/memoir",
      technologies: ["React", "Django", "PostgreSQL", "AWS", "TypeScript"],
      image: "/images/project-memoir.jpg"
    },
    {
      id: 6,
      title: "Serverless Function Platform",
      category: "backend",
      description: "Platform for executing tasks/functions dynamically within a Kubernetes environment with monitoring capabilities.",
      link: "https://github.com/veeoid/Serverless-Function-Development-Platform.git",
      technologies: ["Python", "Django", "Kubernetes", "Docker", "REST APIs"],
      image: "/images/project-serverless.jpg"
    },
    {
      id: 7,
      title: "Virtual Assistant with Sign Language",
      category: "ai",
      description: "Application that enables deaf-mutes to communicate with Virtual Voice Assistants using computer vision and deep learning.",
      link: "https://github.com/veeoid/Sign_Language_Recognition_for_Digitial_Assistants",
      technologies: ["Python", "OpenCV", "TensorFlow", "Speech Recognition"],
      image: "/images/project-signlanguage.jpg"
    },
    {
      id: 8,
      title: "Instagram Trend Analysis",
      category: "backend",
      description: "Data analysis project to uncover patterns in user behavior on Instagram, particularly related to location-based posting.",
      link: "https://github.com/veeoid/Instagram_Trend_Analysis",
      technologies: ["PostgreSQL", "MongoDB", "Python", "Data Analysis"],
      image: "/images/project-instagram.jpg"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === activeTab);

  const tabClasses = (tab: 'all' | 'web' | 'ai' | 'backend') => `
    px-4 py-2 rounded-full text-sm font-medium
    ${activeTab === tab
      ? 'bg-[#6cccb4] text-black'
      : 'bg-[#222] text-gray-300 hover:bg-[#333] hover:text-white'
    }
    transition-all duration-300 cursor-pointer
  `;

  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#6cccb4] rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -right-20 w-60 h-60 bg-[#cdaa57] rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-[#a15852] rounded-full filter blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-6 md:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-flex flex-col">
            <span>Projects</span>
            <span className="h-1 w-24 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57] mt-3 mx-auto"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Here's a collection of my latest work spanning web applications, AI solutions, and data engineering projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={tabClasses('all')}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={tabClasses('web')}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={tabClasses('ai')}
          >
            AI & ML
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={tabClasses('backend')}
          >
            Backend & Data
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-gradient-to-br from-[#111] to-[#191919] rounded-xl overflow-hidden border border-[#222] hover:border-[#444] transition-all duration-500 hover:shadow-xl hover:shadow-[#6cccb4]/10 transform hover:-translate-y-1"
            >
              <div className="h-48 w-full overflow-hidden relative">
                {/* Project image or placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#111] flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <span className="text-5xl opacity-20">
                    {project.category === 'web' && '🌐'}
                    {project.category === 'ai' && '🤖'}
                    {project.category === 'backend' && '⚙️'}
                  </span>
                </div>

                {/* Overlay with category label */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded bg-black/70 backdrop-blur-sm text-xs font-medium">
                  {project.category === 'web' && 'Web Development'}
                  {project.category === 'ai' && 'AI & ML'}
                  {project.category === 'backend' && 'Backend & Data'}
                </div>

                {/* View project button on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 border-2 border-[#6cccb4] text-[#6cccb4] text-sm font-medium rounded-full transform transition-transform group-hover:scale-105 duration-300">
                    View Project
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6cccb4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-black/80 border border-[#333] rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-black/80 border border-[#333] rounded-full text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/veeoid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#6cccb4] to-[#6cccb4]/80 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#6cccb4]/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
            See All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
