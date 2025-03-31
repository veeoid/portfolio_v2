import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />
      <div id="content" className="content">
        <Hero />
        <div>
          <Timeline />
          <Projects />
          <Skills />
          <Publications />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
