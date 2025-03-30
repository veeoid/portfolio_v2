import { useState, useEffect } from "react";

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  level?: number; // 1-5 scale for skill proficiency
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      name: "Programming Languages",
      description: "My core programming languages that I use across different projects and platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      skills: ["Python", "JavaScript", "TypeScript", "C#", "SQL", "Java", "Go"],
      level: 5
    },
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Technologies I use to create responsive, interactive user interfaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
        </svg>
      ),
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Angular"],
      level: 4
    },
    {
      id: "backend",
      name: "Backend Development",
      description: "Server-side frameworks and technologies for building robust APIs and services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
      ),
      skills: ["Django", "Node.js", "Express", "Flask", ".NET Core", "FastAPI", "GraphQL"],
      level: 5
    },
    {
      id: "databases",
      name: "Database Systems",
      description: "Database technologies I'm proficient with for data storage and management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Cassandra", "Redis", "DynamoDB"],
      level: 4
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      description: "Cloud platforms and DevOps tools I use for deployment and infrastructure management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      ),
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"],
      level: 4
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      description: "Tools and frameworks I work with for artificial intelligence and machine learning applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "NLP", "Computer Vision", "LLMs"],
      level: 3
    }
  ];

  // Handle category selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#080808] text-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#6cccb4] filter blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-6 md:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-flex flex-col">
            <span>Technical Skills</span>
            <span className="h-1 w-24 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57] mt-3 mx-auto"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            My expertise spans across multiple domains of software development, from frontend to backend, cloud infrastructure, and AI solutions.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`group relative p-6 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-br from-[#151515] to-[#1a1a1a] border-[#6cccb4] scale-[1.02] shadow-xl shadow-[#6cccb4]/10'
                  : 'bg-gradient-to-br from-[#111] to-[#131313] border-[#222] hover:border-[#333]'
              } border`}
              onClick={() => toggleCategory(category.id)}
            >
              {/* Top section with icon and name */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  selectedCategory === category.id
                    ? 'bg-[#6cccb4] text-black'
                    : 'bg-[#222] text-[#6cccb4] group-hover:bg-[#1e2b28]'
                } transition-colors`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  {category.level && (
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-5 mr-1 rounded-full ${
                            i < category.level!
                              ? 'bg-[#6cccb4]'
                              : 'bg-[#333]'
                          }`}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-5">
                {category.description}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#1a1a1a] text-[#6cccb4] border border-[#6cccb4]/30'
                        : 'bg-[#1a1a1a] text-gray-300 border border-[#2a2a2a]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Expand indicator */}
              <div className={`absolute bottom-3 right-3 transition-transform duration-300 ${
                selectedCategory === category.id ? 'rotate-180' : ''
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills highlights */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-5">Continuous Learning</h3>
          <p className="text-gray-400 mb-8">
            I'm passionate about staying current with emerging technologies. Currently exploring:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Web3 Technologies", "Rust", "Svelte", "Kotlin",
              "Generative AI", "Computer Vision", "Microservices Architecture"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#1a1a1a] to-[#141414] text-[#6cccb4] rounded-full border border-[#333] text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
