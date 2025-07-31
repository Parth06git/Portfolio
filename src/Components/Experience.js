import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/hoverEffect.css";

const experiences = [
  {
    company: "IIT Kanpur",
    title: "Teaching Assistant – FSC",
    location: "Kanpur",
    duration: "Jul 2025 – Present",
    description: [],
  },
  {
    company: "Athenalogics Solution Pvt Ltd",
    title: "Project Assistant & Zuora Developer Intern",
    location: "Jaipur",
    duration: "May 2024 – Jul 2024",
    description: [
      "Supported subscription-based businesses and learned about Zuora’s operation.",
      "Developed and oversaw a Zuora application for a company offering news via subscription.",
      "Assisted in managing additional Zuora applications.",
    ],
  },
  {
    company: "UG Research Projects",
    title: "Structural Modelling & ML Researcher",
    location: "IIT Tirupati",
    duration: "Aug 2024 – May 2025",
    description: [
      "Worked on ML-based prediction of structural strength using FE model datasets.",
      "Performed parametric studies of castellated columns under various loading conditions.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Experience</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={12} className="mb-4" key={index}>
              <Card className="hover-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">{exp.company}</h5>
                    <small className="text-muted">{exp.duration}</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="text-primary">{exp.title}</h6>
                    <small>{exp.location}</small>
                  </div>
                  <ul className="mt-2 mb-0">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
