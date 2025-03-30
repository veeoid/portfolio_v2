// components/Timeline.tsx
import { useEffect, useState } from "react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Started MS in Computer Science",
    date: "Aug 2023",
    description: "Began pursuing Master's degree at RIT.",
  },
  {
    id: 2,
    title: "Joined Ecolab as SWE Co-op",
    date: "Jan 2024",
    description: "Backend-focused role in the Data Engineering team.",
  },
  {
    id: 3,
    title: "Participated in VCT Hackathon",
    date: "Oct 2024",
    description: "Built a Valorant team assistant using AWS Bedrock.",
  },
];

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("timeline");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="relative bg-[#080808] py-20 text-white">
      <div
        className={`container mx-auto px-6 transition-all duration-1000 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-12 text-center text-4xl font-bold">
          <span>My Timeline</span>
          <span className="mx-auto mt-3 block h-1 w-24 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57]"></span>
        </h2>

        <div className="relative ml-4 space-y-10 border-l border-[#6cccb4]/40 pl-6">
          {timelineEvents.map((event) => (
            <div key={event.id} className="relative">
              <div className="absolute -left-3 top-1.5 h-3 w-3 rounded-full bg-[#6cccb4]"></div>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <span className="text-sm text-[#cdaa57]">{event.date}</span>
              <p className="mt-2 text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
