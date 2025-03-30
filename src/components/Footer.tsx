import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

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

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer
      id="footer"
      className={`bg-[#151514] text-white py-8 border-t border-gray-800 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-white hover:text-[#6cccb4] transition-colors">
              © {currentYear} Vismay Chaudhari. All rights reserved.
            </a>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#6cccb4] transition-colors">about</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-[#6cccb4] transition-colors">skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#6cccb4] transition-colors">projects</a>
              </li>
              <li>
                <a href="#publications" className="text-gray-400 hover:text-[#6cccb4] transition-colors">publications</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#6cccb4] transition-colors">contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#top"
            className="inline-flex items-center text-gray-400 hover:text-[#6cccb4] transition-colors"
          >
            <span>Back to top</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
