import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import LiveShowcase from "./components/LiveShowcase";

export default function App() {
  return (
    <div>
      <Header />
      <div id="content" className="content">
        <Hero />
        <div>
          <Timeline />
          <LiveShowcase />
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
