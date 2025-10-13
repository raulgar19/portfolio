import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
