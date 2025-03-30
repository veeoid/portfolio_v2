import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#222] bg-black/90 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a href="/" className="group relative text-2xl font-bold text-[#6cccb4] sm:text-3xl">
          <span className="relative z-10">VC</span>
          <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-[#6cccb4] transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-10">
            <li>
              <a
                href="#about"
                className="group relative text-base font-medium text-white transition-colors hover:text-[#6cccb4]"
              >
                About
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#6cccb4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="group relative text-base font-medium text-white transition-colors hover:text-[#6cccb4]"
              >
                Skills
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#6cccb4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="group relative text-base font-medium text-white transition-colors hover:text-[#6cccb4]"
              >
                Projects
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#6cccb4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="group relative text-base font-medium text-white transition-colors hover:text-[#6cccb4]"
              >
                Publications
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#6cccb4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="group relative text-base font-medium text-white transition-colors hover:text-[#6cccb4]"
              >
                Contact
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#6cccb4] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden items-center space-x-5 lg:flex">
          <a
            href="https://github.com/veeoid"
            target="_blank"
            rel="noopener noreferrer"
            className="transform text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#6cccb4]"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vismay-chaudhari/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#6cccb4]"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <div className="h-5 w-[1px] bg-gray-700"></div>
          <a
            href="/user-components/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-700 px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-[#6cccb4] hover:text-[#6cccb4]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-1 text-white focus:outline-none lg:hidden"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-[2px] w-full transform rounded-full bg-white transition-all duration-300 ${
                mobileNavOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                mobileNavOpen ? "w-0 opacity-0" : "w-full opacity-100"
              }`}
            ></span>
            <span
              className={`h-[2px] w-full transform rounded-full bg-white transition-all duration-300 ${
                mobileNavOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute w-full border-b border-[#222] bg-black backdrop-blur-md transition-all duration-500 lg:hidden ${
          mobileNavOpen
            ? "max-h-[500px] border-opacity-100 py-6 opacity-100"
            : "max-h-0 overflow-hidden border-opacity-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="mb-8">
            <ul className="flex flex-col space-y-5">
              <li>
                <a
                  href="#about"
                  className="block text-lg text-white transition-colors hover:text-[#6cccb4]"
                  onClick={() => setMobileNavOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block text-lg text-white transition-colors hover:text-[#6cccb4]"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-lg text-white transition-colors hover:text-[#6cccb4]"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="block text-lg text-white transition-colors hover:text-[#6cccb4]"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-lg text-white transition-colors hover:text-[#6cccb4]"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-6 border-t border-gray-800 pt-2">
            <a
              href="https://github.com/veeoid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#6cccb4]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vismay-chaudhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#6cccb4]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a
              href="/user-components/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-700 px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:border-[#6cccb4] hover:text-[#6cccb4]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
