import { useEffect, useState } from "react";

const categories = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#", "Java", "SQL"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Django", "FastAPI", "Express", "Flask", ".NET Core", "GraphQL"],
  },
  {
    name: "Data Engineering",
    skills: ["PySpark", "Snowflake", "Apache Kafka", "Great Expectations", "dbt", "Airflow"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB", "Cassandra", "Firebase"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "AppDynamics"],
  },
  {
    name: "AI & ML",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "LangChain", "LLMs", "RAG", "NLP"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

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
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden bg-background py-24 text-foreground">
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-3xl animate-blob-drift"
        style={{ background: "radial-gradient(circle, var(--aur-amber) 0%, transparent 60%)" }}
      />
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-1000 md:px-12 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Expertise</p>
          <h2 className="font-display text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>
        {/* Flat category list */}
        <div className="space-y-10">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="border-border-subtle grid grid-cols-1 gap-4 border-t pt-8 md:grid-cols-[180px_1fr]"
            >
              <span className="flex items-start gap-2 pt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{
                    backgroundColor: `var(--aur-${(["rose", "lavender", "amber"] as const)[i % 3]})`,
                  }}
                />
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
