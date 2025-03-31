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
    date: "Rochester Institute of Technology\nExpected Graduation: May 2025",
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
    title: "Software Engineer",
    date: "Ecolab\nAug 2024 - Present",
    description:
      "Automated data ingestion from Azure Blob to Snowflake using PySpark, improving pipeline efficiency and streamlining large-scale data processing.\nDesigned and optimized ETL workflows for data extraction, transformation, and loading, reducing processing time by 30% and ensuring 99% data accuracy for analytics.\nRefined and maintained data pipelines for recommendation models, aligning with business needs to improve model training and optimize decision-making processes.\nCollaborated with global teams to compare datasets, resolve discrepancies, and establish global data consistency across regions.",
    category: "experience",
  },
  {
    id: 4,
    title: "Assistant System Engineer",
    date: "Tata Consultancy Services\nOct 2020 - Jul 2022",
    description:
      "Developed and deployed automation scripts using VBScript and SQL, streamlining workflows and reducing manual intervention.\nOptimized Microsoft SQL Server and MySQL databases by fine-tuning queries, improving performance and reducing query execution time.\nCollaborated with cross-functional teams and implemented Git for version control, ensuring smooth integration and consistent deployment of solutions.",
    category: "experience",
  },
  {
    id: 5,
    title: "Intern - Software Developer",
    date: "Trivia Softwares\nFeb 2019 - Jul 2019",
    description:
      "Developed a Student Database Management System using Python and SQLite, implementing optimized data handling techniques and advanced query performance for managing large student datasets.\nBuilt an Android application using Java and XML, integrating offline data storage with SQLite and enabling secure synchronization between the mobile app and Python backend.\nImplemented advanced features like search with filters, sorting, and pagination, enhancing user experience while ensuring data integrity and synchronization across both platforms.",
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
