import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Project />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p className="mb-0">Built by Parth Trivedi © 2025</p>
        </Container>
      </footer>
    </>
  );
};

export default App;
