import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Adventure from "./pages/Adventure";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CallNowButton from "./components/CallNowButton";
import "./index.css";

function App() {
  return (
    <div className="font-poppins scroll-smooth">
      <Navbar />
      <CallNowButton />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="adventure">
        <Adventure />
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
