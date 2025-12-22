import { useState, useEffect } from "react";

interface Publication {
  id: number;
  title: string;
  publisher: string;
  year: number;
  description: string;
  link: string;
  doi?: string;
  tags?: string[];
}

export default function Publications() {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById("publications");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const publications: Publication[] = [
    {
      id: 1,
      title:
        "Implementation of Virtual Assistant with Sign Language using Deep Learning and TensorFlow",
      publisher:
        "Second International Conference on Inventive Research in Computing Applications (IEEE)",
      year: 2020,
      description:
        "This research paper presents an innovative system that bridges the communication gap for deaf-mutes by enabling them to interact with voice-based virtual assistants. Using deep learning and computer vision, the system translates sign language gestures into audio inputs and converts voice responses back into text.",
      link: "https://ieeexplore.ieee.org/abstract/document/9183179",
      doi: "10.1109/ICIRCA48905.2020.9183179",
      tags: [
        "Sign Language Recognition",
        "Virtual Assistants",
        "Accessibility",
        "TensorFlow",
        "Deep Learning",
      ],
    },
    {
      id: 2,
      title: "Hand Gestures Recognition using Deep Learning",
      publisher: "International Research Journal of Engineering and Technology (IRJET)",
      year: 2020,
      description:
        "This paper explores methodologies for creating a versatile interface that enables voice-controlled devices to accept hand gesture inputs and generate text outputs. The research focuses on optimizing deep learning architectures for real-time sign language interpretation with minimal computational resources.",
      link: "https://www.irjet.net/archives/V7/i3/IRJET-V7I31032.pdf",
      tags: [
        "Gesture Recognition",
        "Neural Networks",
        "Computer Vision",
        "Human-Computer Interaction",
        "OpenCV",
      ],
    },
  ];

  return (
    <section id="publications" className="relative bg-black py-20 text-white">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-20 z-0 h-1/3 w-full overflow-hidden opacity-5">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl filter"></div>
      </div>

      <div
        className={`container relative z-10 mx-auto px-6 transition-all duration-1000 md:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <h2 className="relative inline-flex flex-col text-4xl font-bold">
            <span>Publications</span>
            <span className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57]"></span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            My research work focuses on making technology more accessible and enhancing
            human-computer interaction through AI and computer vision.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          {publications.map((publication, index) => (
            <div
              key={publication.id}
              className="group relative overflow-hidden rounded-xl border border-[#222] bg-gradient-to-b from-[#111] to-[#0a0a0a] transition-all duration-300 hover:border-[#6cccb4]/30 hover:shadow-lg hover:shadow-[#6cccb4]/5"
            >
              {/* Publication year badge */}
              <div className="absolute right-1 top-2 rounded-full border border-[#333] bg-black/70 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                {publication.year}
              </div>

              <div className="p-8 md:p-10">
                {/* Title and publisher */}
                <div className="mb-6">
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-[#6cccb4]">
                    {publication.title}
                  </h3>
                  <p className="font-medium text-gray-400">{publication.publisher}</p>
                  {publication.doi && (
                    <p className="mt-1 text-sm text-gray-500">DOI: {publication.doi}</p>
                  )}
                </div>

                {/* Description */}
                <p className="mb-8 border-l-2 border-[#333] py-2 pl-4 leading-relaxed text-gray-300">
                  {publication.description}
                </p>

                {/* Tags */}
                {publication.tags && (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-[#151515] px-3 py-1 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action link */}
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 py-2 text-[#6cccb4] transition-colors hover:text-white"
                  aria-label={`Read ${publication.title}`}
                >
                  <span>Read Full Paper</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Visual indicator for position */}
              {index !== publications.length - 1 && (
                <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full border border-[#333] bg-black">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6cccb4]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional research interests */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h3 className="mb-5 text-2xl font-semibold">Research Interests</h3>
          <p className="mb-8 text-gray-400">
            I'm passionate about research in accessible technology and AI applications. My focus
            areas include:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Hallucination in Large Language Models",
              "Computer Vision",
              "Retrieval-Augmented Generation",
              "AI for Developer Tools",
            ].map((interest, index) => (
              <span
                key={index}
                className="rounded-full border border-[#333] bg-gradient-to-r from-[#1a1a1a] to-[#141414] px-4 py-2 text-sm text-[#6cccb4]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
