import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/hoverEffect.css";

const pors = [
  {
    company: "IIT Kanpur",
    title: "Student Nominee – DPGC",
    location: "Kanpur",
    duration: "Sep 2025 – Present",
    description: [
      "DPGC stand for Departmental Post Graduate Committee",
      "Helping peers with their academic problems",
    ],
  },
  {
    company: "IIT Kanpur",
    title: "Teaching Assistant – FSC",
    location: "Kanpur",
    duration: "Jul 2025 – Present",
    description: [
      "FSC stand for Faculty Search Council",
      "Finding researcher that can be faculty at IIT Kanpur",
    ],
  },
  {
    company: "IIT Tirupati",
    title: "Event Manager – Scribbles",
    location: "Tirupati",
    duration: "Jul 2024 – May 2025",
    description: [
      "Writing Club of IIT Tirupati",
      "Planning and managing all the events of the club",
    ],
  },
  {
    company: "IIT Tirupati",
    title: "Co Coordinator – Aranya",
    location: "Tirupati",
    duration: "Jun 2022 – Nov 2023",
    description: [
      "Adventure club of IIT Tirupati",
      "Handle Treks, in-campus actacities",
    ],
  },
];

const POR = () => {
  return (
    <section id="por" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Position Of Responsibility</h2>
        <Row>
          {pors.map((exp, index) => (
            <Col md={12} className="mb-4" key={index}>
              <Card className="hover-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-1">{exp.title}</h5>
                    <small className="text-muted">{exp.duration}</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="text-primary">{exp.company}</h6>
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

export default POR;
