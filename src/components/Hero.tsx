import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState<"left" | "right" | "none">("none");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const center = width / 2;
    const threshold = width * 0.15;

    if (x <= center - threshold) {
      setActiveImage("left");
    } else if (x >= center + threshold) {
      setActiveImage("right");
    } else {
      setActiveImage("none");
    }
  };

  const getTextTransition = (side: "left" | "right") => {
    return `absolute inset-0 flex flex-col justify-center px-10 text-white transition-all duration-700 ease-in-out transform ${
      activeImage === side || activeImage === "none"
        ? "opacity-100 scale-100"
        : "opacity-30 scale-[0.98]"
    }`;
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Desktop View */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveImage("none")}
        className={`relative z-10 hidden w-full items-center justify-center transition-all duration-1000 md:flex md:flex-row ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Designer Side */}
        <div className="relative z-10 h-[700px] w-1/2">
          <div className={getTextTransition("left") + " items-start"}>
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
        <div className="relative z-10 h-[700px] w-1/2">
          <div className={getTextTransition("right") + " items-end text-right"}>
            <h1 className="mb-4 text-5xl font-bold text-[#6cccb4]">&lt;Software Engineer/&gt;</h1>
            <p className="max-w-md text-lg">
              Whether it’s fixing something that’s broken or building something that’s missing, I
              like writing code that actually helps someone.
            </p>
          </div>
        </div>

        {/* Full Image */}
        <div className="absolute left-0 top-0 h-[700px] w-full overflow-hidden">
          <img
            src="/center.png"
            alt="Vismay Chaudhari Center"
            className={`absolute h-full w-full object-contain transition-all duration-700 ease-in-out ${
              activeImage === "none" ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
          <img
            src="/regular.png"
            alt="Vismay Chaudhari"
            className={`absolute h-full w-full object-contain transition-all duration-700 ease-in-out ${
              activeImage === "left" ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
          <img
            src="/animated.png"
            alt="Vismay Chaudhari Animated"
            className={`absolute h-full w-full object-contain transition-all duration-700 ease-in-out ${
              activeImage === "right" ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
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
          <h1 className="mb-2 text-2xl font-bold text-[#6cccb4]">&lt;Software Engineer/&gt;</h1>
          <p className="text-sm text-white">
            Whether it’s fixing something that’s broken or building something that’s missing, I like
            writing code that actually helps someone.
          </p>
        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="pointer-events-none absolute bottom-8 left-[48.2%] z-20 hidden -translate-x-1/2 transform animate-bounce flex-col items-center opacity-70 transition-opacity hover:opacity-100 md:flex">
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
