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
      { threshold: 0.1 }
    );

    const section = document.getElementById('publications');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const publications: Publication[] = [
    {
      id: 1,
      title: "Implementation of Virtual Assistant with Sign Language using Deep Learning and TensorFlow",
      publisher: "Second International Conference on Inventive Research in Computing Applications (IEEE)",
      year: 2020,
      description: "This research paper presents an innovative system that bridges the communication gap for deaf-mutes by enabling them to interact with voice-based virtual assistants. Using deep learning and computer vision, the system translates sign language gestures into audio inputs and converts voice responses back into text.",
      link: "https://ieeexplore.ieee.org/abstract/document/9183179",
      doi: "10.1109/ICIRCA48905.2020.9183179",
      tags: ["Sign Language Recognition", "Virtual Assistants", "Accessibility", "TensorFlow", "Deep Learning"]
    },
    {
      id: 2,
      title: "Hand Gestures Recognition using Deep Learning",
      publisher: "International Research Journal of Engineering and Technology (IRJET)",
      year: 2020,
      description: "This paper explores methodologies for creating a versatile interface that enables voice-controlled devices to accept hand gesture inputs and generate text outputs. The research focuses on optimizing deep learning architectures for real-time sign language interpretation with minimal computational resources.",
      link: "https://www.irjet.net/archives/V7/i3/IRJET-V7I31032.pdf",
      tags: ["Gesture Recognition", "Neural Networks", "Computer Vision", "Human-Computer Interaction", "OpenCV"]
    }
  ];

  return (
    <section id="publications" className="py-20 bg-black text-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-full h-1/3 overflow-hidden z-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 filter blur-3xl"></div>
      </div>

      <div
        className={`container mx-auto px-6 md:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-flex flex-col">
            <span>Publications</span>
            <span className="h-1 w-24 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57] mt-3 mx-auto"></span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            My research work focuses on making technology more accessible and enhancing human-computer interaction through AI and computer vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {publications.map((publication, index) => (
            <div
              key={publication.id}
              className="group relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#6cccb4]/30 hover:shadow-lg hover:shadow-[#6cccb4]/5"
            >
              {/* Publication year badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-sm font-medium border border-[#333]">
                {publication.year}
              </div>

              <div className="p-8 md:p-10">
                {/* Title and publisher */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#6cccb4] transition-colors">
                    {publication.title}
                  </h3>
                  <p className="text-gray-400 font-medium">
                    {publication.publisher}
                  </p>
                  {publication.doi && (
                    <p className="text-gray-500 text-sm mt-1">
                      DOI: {publication.doi}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed border-l-2 border-[#333] pl-4 py-2">
                  {publication.description}
                </p>

                {/* Tags */}
                {publication.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {publication.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-[#151515] text-gray-400 rounded-full"
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
                  className="inline-flex items-center gap-2 py-2 text-[#6cccb4] hover:text-white transition-colors group"
                  aria-label={`Read ${publication.title}`}
                >
                  <span>Read Full Paper</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              {/* Visual indicator for position */}
              {index !== publications.length - 1 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-black border border-[#333] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6cccb4]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional research interests */}
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-5">Research Interests</h3>
          <p className="text-gray-400 mb-8">
            I'm passionate about research in accessible technology and AI applications. My focus areas include:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Accessibility Technology",
              "Computer Vision",
              "Multimodal Interfaces",
              "AI Ethics",
              "Human-Computer Interaction"
            ].map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#1a1a1a] to-[#141414] text-[#6cccb4] rounded-full border border-[#333] text-sm"
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
