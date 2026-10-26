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
  return (
    <section id="skills" className="border-t border-border bg-background py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Expertise</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Technical skills</h2>
        </div>
        {/* Flat category list */}
        <div className="space-y-10">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="border-border-subtle grid grid-cols-1 gap-4 border-t pt-8 md:grid-cols-[180px_1fr]"
            >
              <span className="pt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
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
