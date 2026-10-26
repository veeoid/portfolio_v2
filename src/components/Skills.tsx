const categories = [
  {
    name: "Languages",
    skills: ["Python", "SQL", "C#", "TypeScript", "JavaScript"],
  },
  {
    name: "Backend",
    skills: ["ASP.NET Core", "FastAPI", "Flask", "Django", "Node.js", "Express", "Entity Framework Core"],
  },
  {
    name: "Data Engineering",
    skills: ["Snowflake", "Snowpark", "Snowflake ML", "PySpark", "pandas", "NumPy"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "DynamoDB"],
  },
  {
    name: "Cloud Platforms",
    skills: ["Azure (FunctionApps, OIDC, Key Vaults, Blob)", "AWS (EC2, EKS, ECR, DynamoDB, Bedrock, Sagemaker)"],
  },
  {
    name: "AI & ML",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Sentence Transformers", "LangChain", "OpenCV"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Tools & Testing",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Git", "pytest", "Playwright", "AppDynamics", "Postman"],
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
