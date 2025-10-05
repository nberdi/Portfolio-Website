import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="text-container">
      <div className="fixed-background">
        <div className="background-overlay" />
      </div>

      <div className="container-class">
        <Navbar />
        <Intro />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
