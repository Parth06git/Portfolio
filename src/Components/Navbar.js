import React from "react";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/navbar.css";

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <BSNavbar.Brand href="#home" className="fw-bold fs-4 text-primary">
          Parth Trivedi
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link href="#education" className="nav-link-custom">
              Education
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-link-custom">
              Experience
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
