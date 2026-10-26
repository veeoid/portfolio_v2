const publications = [
  {
    id: 1,
    title:
      "Implementation of Virtual Assistant with Sign Language using Deep Learning and TensorFlow",
    venue: "IEEE ICIRCA 2020",
    year: 2020,
    description:
      "System that bridges the communication gap for deaf-mutes by translating sign language gestures into voice assistant inputs and converting responses back to text — using deep learning and computer vision.",
    link: "https://ieeexplore.ieee.org/abstract/document/9183179",
    doi: "10.1109/ICIRCA48905.2020.9183179",
    tags: ["Sign Language", "Virtual Assistants", "Accessibility", "TensorFlow", "Deep Learning"],
  },
  {
    id: 2,
    title: "Hand Gestures Recognition using Deep Learning",
    venue: "IRJET Vol. 7 Issue 3, 2020",
    year: 2020,
    description:
      "Methodologies for creating a versatile gesture interface enabling voice-controlled devices to accept hand gesture inputs and produce text outputs, optimized for real-time recognition with minimal compute.",
    link: "https://www.irjet.net/archives/V7/i3/IRJET-V7I31032.pdf",
    tags: ["Gesture Recognition", "Neural Networks", "Computer Vision", "HCI", "OpenCV"],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="border-t border-border bg-background py-24 text-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Research</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Publications</h2>
        </div>

        <div className="space-y-px">
          {publications.map((pub) => (
            <div key={pub.id} className="border-border-subtle group border-t py-10 last:border-b">
              <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                {/* Year */}
                <div className="flex-shrink-0 md:w-20">
                  <span className="font-mono text-xs text-muted">{pub.year}</span>
                  <div className="mt-2 hidden h-px w-8 bg-accent/30 md:block" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className="mb-1 text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--aur-lavender)" }}
                  >
                    {pub.venue}
                  </div>
                  <h3 className="mb-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-accent md:text-lg">
                    {pub.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">{pub.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="skill-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-5">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-foreground"
                    >
                      Read Paper
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
                    {pub.doi && (
                      <span className="font-mono text-[10px] text-muted">DOI: {pub.doi}</span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
