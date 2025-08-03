import { useEffect, useState } from "react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  category: "education" | "experience";
}

const timelineEvents: TimelineEvent[] = [
  // Education
  {
    id: 1,
    title: "MS in Computer Science",
    date: "Rochester Institute of Technology\nExpected Graduation: Aug 2025",
    description:
      "Related Coursework: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Big Data Analytics, Distributed Systems, Data Security & Privacy, Cryptography, and Database System Implementation.",
    category: "education",
  },
  {
    id: 2,
    title: "BE in Information Technology",
    date: "University of Mumbai\nJul 2016 - Oct 2020",
    description:
      "Related Coursework: Operating Systems, Database Management Systems, Computer Networking, Artificial Intelligence, Business Intelligence.",
    category: "education",
  },

  // Experience
  {
    id: 3,
    title: "Software Engineer: Co-op",
    date: "Ecolab\nAug 2024 - Present",
    description:
      "Engineered PySpark ETL pipelines processing 50M+ daily Snowflake records across 170+ countries, reducing manual reporting time by 40\%.\nImplemented Great Expectations data quality framework with 25+ validation rules for global product data, achieving 99.7\% data accuracy across production systems.\nImplemented AppDynamics monitoring integration for pipeline health checks, enabling proactive notification system for 15+ production data workflows.\n Automated Snowflake ingestion workflows using Azure DevOps CI/CD with parameterized templates, improving deployment consistency by 85\% across environments.\nRevived hybrid recommendation engine using Apriori, K-means, and SVD algorithms for SKU optimization, increasing cross-sell opportunities across customer segments.\nCreated production-grade C\# (.NET) APIs to serve usage and performance metrics for 2M+ customers, powering Angular dashboards used by sales and service teams.",
    category: "experience",
  },
  {
    id: 4,
    title: "Software Engineer",
    date: "Tata Consultancy Services\nOct 2020 - Jul 2022",
    description:
      "Developed backend APIs in .NET to capture trade details and transmit them to downstream systems via ActiveMQ, replacing legacy TIBCO-based messaging in a capital markets project.\nAutomated backend validation workflows using VBScript and UFT, enabling compliance checks on trade data without manual intervention.\nQueried and analyzed large volumes of transactional data using SQL Server for debugging, reporting, and ensuring data accuracy.\nGained hands-on experience working with trade processing systems handling sensitive financial data, collaborating closely with developers, testers, and business analysts in Agile teams.",
    category: "experience",
  },
  {
    id: 5,
    title: "Software Developer: Intern",
    date: "Trivia Softwares\nFeb 2019 - Jul 2019",
    description:
      "Designed and developed a Student Database Management System using Python and SQLite, implementing core backend functionalities for efficient CRUD operations on student records.\nBuilt an Android application using Java and XML to enable users to interact with the backend system and sync data in real-time.\nOptimized database schema and queries to improve performance and ensure smooth data retrieval across the system.\nCollaborated with the team to troubleshoot and resolve data synchronization issues between the mobile app and backend.\nTested the system for usability and ensured seamless interaction between the Android app and database.",
    category: "experience",
  },
];

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const educationEvents = timelineEvents.filter((e) => e.category === "education");
  const experienceEvents = timelineEvents.filter((e) => e.category === "experience");

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderEvent = (event: TimelineEvent) => {
    const [institute, graduation] = event.date.split("\n");
    const descriptionLines = event.description.split("\n");
    const isBulletList = descriptionLines.length > 1;

    return (
      <div
        key={event.id}
        className="group relative mb-10 cursor-pointer rounded-2xl border border-[#3fc8a7]/10 bg-[#1a1a1a] p-6 pl-10 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg hover:ring-2 hover:ring-[#3fc8a7]/30 hover:ring-offset-2"
        onClick={() => toggleExpand(event.id)}
      >
        <div
          className={`absolute left-2 top-6 h-4 w-4 rounded-full ${
            expandedId === event.id ? "animate-pulse bg-[#3fc8a7]" : "bg-[#3fc8a7]"
          }`}
        ></div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-white">{event.title}</h4>
          <span className="text-lg text-white">{expandedId === event.id ? "−" : "+"}</span>
        </div>
        <span className="block text-base font-medium leading-tight text-[#cccccc]">
          {institute}
        </span>
        <span className="mb-1 block text-xs text-[#999999]">{graduation}</span>
        {expandedId === event.id &&
          (isBulletList ? (
            <ul className="animate-fade-in mt-1 list-inside list-disc text-sm text-gray-400">
              {descriptionLines.map((line, index) => (
                <li
                  key={index}
                  className="transition-all duration-200 ease-in-out hover:translate-x-1 hover:text-[#3fc8a7]"
                >
                  {line}
                </li>
              ))}
            </ul>
          ) : (
            <p className="animate-fade-in mt-1 whitespace-pre-line text-sm text-gray-400">
              {event.description}
            </p>
          ))}
      </div>
    );
  };

  return (
    <section id="timeline" className="bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#3fc8a7]">My Journey</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-[#3fc8a7]">🎓 Education</h3>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-1 rounded-full bg-gradient-to-b from-[#3fc8a7] to-[#17796d]"></div>
              {educationEvents.map(renderEvent)}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-[#3fc8a7]">💼 Experience</h3>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-1 rounded-full bg-gradient-to-b from-[#3fc8a7] to-[#17796d]"></div>
              {experienceEvents.map(renderEvent)}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
