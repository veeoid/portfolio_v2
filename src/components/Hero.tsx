import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-black to-[#151514] opacity-80"></div>

      {/* Main content */}
      <div
        className={`container relative z-10 mx-auto px-6 transition-all duration-1000 md:px-8 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left side content - Text */}
          <div className="w-full space-y-8 lg:w-7/12">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                <span className="mb-1 block text-5xl text-[#6cccb4] opacity-90">
                  Vismay Chaudhari
                </span>
                <span className="relative text-3xl">&lt;Software Engineer/&gt;</span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-[#6cccb4] to-[#cdaa57]"></div>

              <div className="mt-10 space-y-6">
                <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
                  I build software that feels like it was meant to work that way.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
                  Whether it’s fixing something that’s broken or building something that’s missing,
                  I like writing code that actually helps someone.
                </p>
              </div>
            </div>

            <div className="py-2">
              <p className="text-lg leading-relaxed text-gray-400">
                Hey, I'm Vismay! I've always been curious about how things work, whether it was
                taking apart gadgets as a kid or figuring out why my code wasn't running in college.
                That curiosity led me to a career in software development, where I get to build
                things, solve problems, and constantly learn.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="https://github.com/veeoid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-[#6cccb4] px-8 py-3.5 font-semibold text-black transition-all hover:bg-opacity-90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vismay-chaudhari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border-2 border-[#6cccb4] px-8 py-3.5 font-semibold text-[#6cccb4] transition-all hover:bg-[#6cccb4] hover:text-black"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative flex w-full justify-center lg:w-5/12 lg:justify-end">
            <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px]">
              {/* Glowing backdrop */}
              <div className="absolute h-full w-full scale-90 transform rounded-full bg-gradient-to-r from-[#6cccb4] via-[#cdaa57] to-[#a15852] opacity-70 blur-2xl"></div>

              {/* Border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-[#6cccb4] bg-black bg-opacity-40 backdrop-blur-sm"></div>

              {/* Image container */}
              <div className="absolute inset-[6px] overflow-hidden rounded-full">
                <img
                  src="public\regular.png"
                  alt="Vismay Chaudhari"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform animate-bounce cursor-pointer flex-col items-center opacity-70 transition-opacity hover:opacity-100">
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

      {/* Tech decorative elements */}
      <div className="absolute left-8 top-16 font-mono text-6xl text-[#6cccb4] opacity-10">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-16 right-8 font-mono text-6xl text-[#6cccb4] opacity-10">
        {}
      </div>
    </section>
  );
}
