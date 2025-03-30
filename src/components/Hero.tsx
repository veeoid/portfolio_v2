import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hovered, setHovered] = useState<"left" | "right" | "none">("none");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Desktop View */}
      <div
        className={`relative z-10 hidden w-full items-center justify-center transition-all duration-1000 md:flex md:flex-row ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        onMouseLeave={() => setHovered("none")}
      >
        {/* Designer Side */}
        <div
          onMouseEnter={() => setHovered("left")}
          className="relative z-10 h-[700px] w-1/2 cursor-pointer"
        >
          <div
            className={`absolute inset-0 flex flex-col items-start justify-center px-10 text-white transition-opacity duration-500 ${
              hovered === "left" || hovered === "none" ? "opacity-100" : "opacity-30"
            } bg-transparent`}
          >
            <h1 className="mb-4 text-5xl font-bold text-[#6cccb4]">Vismay Chaudhari</h1>
            <div className="mt-10 space-y-6">
              <p className="max-w-sm text-base">
                Hey, I'm Vismay. I've always been the kind of person who wants to understand how
                things work. From breaking apart gadgets as a kid to debugging messy code in
                college.
              </p>
              <p className="max-w-sm text-base">
                That curiosity led me to a career in software development, where I get to build
                things, solve problems, and constantly learn.
              </p>
            </div>
          </div>
        </div>

        {/* Coder Side */}
        <div
          onMouseEnter={() => setHovered("right")}
          className="relative z-10 h-[700px] w-1/2 cursor-pointer"
        >
          <div
            className={`absolute inset-0 flex flex-col items-end justify-center px-10 text-right text-white transition-opacity duration-500 ${
              hovered === "right" ? "opacity-100" : "opacity-30"
            } bg-transparent`}
          >
            <h1 className="mb-4 text-5xl font-bold text-[#6cccb4]">&lt;Coder/&gt;</h1>
            <p className="max-w-md text-lg">
              Whether it’s fixing something that’s broken or building something that’s missing, I
              like writing code that actually helps someone.
            </p>
          </div>
        </div>

        {/* Full Image */}
        <div className="absolute left-0 top-0 h-[700px] w-full overflow-hidden">
          <img
            src="/regular.png"
            alt="Vismay Chaudhari"
            className={`absolute h-full w-full object-contain transition-opacity duration-500 ${
              hovered === "none" || hovered === "left" ? "opacity-100" : "opacity-0"
            } bg-black`}
          />
          <img
            src="/animated.png"
            alt="Vismay Chaudhari Animated"
            className={`absolute h-full w-full object-contain transition-opacity duration-500 ${
              hovered === "right" ? "opacity-100" : "opacity-0"
            } bg-black`}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex w-full flex-col items-center justify-center gap-8 px-6 md:hidden">
        <h1 className="text-center text-3xl font-bold text-[#6cccb4]">Vismay Chaudhari</h1>
        <p className="text-center text-sm text-white">
          Hey, I'm Vismay. I've always been the kind of person who wants to understand how things
          work. From breaking apart gadgets as a kid to debugging messy code in college.
        </p>
        <p className="text-center text-sm text-white">
          That curiosity led me to a career in software development, where I get to build things,
          solve problems, and constantly learn.
        </p>
        <div className="w-full max-w-sm">
          <img src="/regular.png" alt="Vismay Chaudhari" className="w-full object-contain" />
        </div>
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-[#6cccb4]">&lt;Coder/&gt;</h1>
          <p className="text-sm text-white">
            Whether it’s fixing something that’s broken or building something that’s missing, I like
            writing code that actually helps someone.
          </p>
        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="pointer-events-none absolute bottom-8 left-[48.2%] z-20 hidden -translate-x-[50%] transform animate-bounce flex-col items-center opacity-70 transition-opacity hover:opacity-100 md:flex">
        <p className="mb-2 text-sm text-[#6cccb4]">Scroll Down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-[#6cccb4]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

      {/* Tech Decorative Elements */}
      <div className="absolute left-4 top-16 font-mono text-4xl text-[#6cccb4] opacity-10 md:left-8 md:text-6xl">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-16 right-4 font-mono text-4xl text-[#6cccb4] opacity-10 md:right-8 md:text-6xl">
        {}
      </div>
    </section>
  );
}
