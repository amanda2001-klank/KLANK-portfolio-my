import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // you already have lucide-react installed
import { Footer } from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_ID);

    // Scroll progress bar + show/hide scroll-to-top button
    const handleScroll = () => {
      // Progress bar
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      document.getElementById("progress-bar").style.width = scrolled + "%";

      // Show button after scrolling 400px
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      {/* Progress Bar at the top */}
      <div id="progress-bar" className="progress-bar" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      

  
      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-top-btn"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}

export default App;