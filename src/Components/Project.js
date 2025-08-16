import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./style/hoverEffect.css";

const projects = [
  {
    title: "Building Drawing Project",
    guide: "Dr. A.V Rahul",
    duration: "Apr. 2023 - May 2023",
    description:
      "Created a working drawing of my own house as a final project for the Building Drawing Lab.",
    tech: "AutoCAD",
  },
  {
    title: "Term Project – RCC Design",
    guide: "Dr. Prasanna Kumar Behera",
    duration: "Apr. 2024 - May 2024",
    description: `Analysis and design of a residential building as part of the BASIC REINFORCED CONCRETE DESIGN course.`,
    tech: "ETABS, IS456:2000",
  },
  {
    title: "Term Project – Estimation and Planning",
    guide: "Dr. K.N. Satyanarayana and Dr. Prasanna Kumar Behera",
    duration: "Oct. 2024 - Nov. 2024",
    description:
      "Estimation and cost analysis of a residential building. Used Microsoft Project for planning.",
    tech: "MS Project",
  },
  {
    title: "Pony Truss Bridge Design",
    guide: null,
    duration: "Dec. 2024 - Jan. 2025",
    description: `As part of Civil Conclave, designed a pedestrian pony truss bridge using 3D lattice structure.`,
    tech: "Conceptual Structural Design",
  },
  {
    title: "B.Tech Term Project – ML for Castellated Columns",
    guide: "Dr. M. Nithyadharan, Dr. Venkataraman",
    duration: "Aug. 2024 – May 2025",
    description: `Developed ML framework to calculate buckling load of castellated columns. Dataset generated via FEM analysis.`,
    tech: "Python, FEM, ANN, DTR, RFR, Sci-kit Learn",
  },
  {
    title: "ProShop E-commerce",
    guide: null,
    duration: null,
    description: `ProShop is an e-commerce website made using the MERN stack.
    Integrated PayPal for payment processing.`,
    tech: "ReactJS, NodeJS, MongoDB, Express, Bootstrap",
    link: "https://github.com/Parth06git/ProShop.git",
  },
  {
    title: "Newsera",
    guide: null,
    duration: null,
    description: `Frontend news app built with ReactJS and open news APIs. Focused on API consumption and presentation.`,
    tech: "ReactJS, Bootstrap",
    link: "https://github.com/Parth06git/NewsEra.git",
  },
  {
    title: "Natours",
    guide: null,
    duration: null,
    description: `Tour information site built with NodeJS. Pug used for templates. Demonstrates full-stack JS capabilities.`,
    tech: "NodeJS, Pug, Express",
    link: "https://github.com/Parth06git/Natours.git",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="mb-5 text-center">Projects</h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col className="mb-4" md={6} lg={4} key={idx}>
              <Card className="hover-card mb-4 shadow-sm h-100 border-0">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">
                    {proj.title}
                  </Card.Title>
                  {proj.guide && (
                    <Card.Subtitle className="mb-2 text-muted">
                      <strong>Guide:</strong> {proj.guide}
                    </Card.Subtitle>
                  )}
                  {proj.duration && (
                    <Card.Text className="mb-2 text-muted">
                      <strong>Duration:</strong> {proj.duration}
                    </Card.Text>
                  )}
                  <Card.Text style={{ minHeight: "90px" }}>
                    {proj.description}
                  </Card.Text>
                  {proj.tech && (
                    <Card.Text>
                      <strong>Tools/Tech:</strong> {proj.tech}
                    </Card.Text>
                  )}
                  {proj.link && (
                    <Button
                      variant="outline-primary"
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
