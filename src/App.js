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
import POR from "./Components/POR";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Experience />
      <POR />
      <Contact />
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p className="mb-0">Built by Parth Trivedi © 2025</p>
        </Container>
      </footer>
    </>
  );
};

export default App;
