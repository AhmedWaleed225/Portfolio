import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

// Import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Certifications from "./Pages/Certifications";
import Contact from "./Pages/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
