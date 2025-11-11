import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/hoverEffect.css";

const experiences = [
  {
    company: "Athenalogics Solution Pvt Ltd",
    title: "Project Assistant & Zuora Developer Intern",
    location: "Jaipur",
    duration: "May 2024 – Jul 2024",
    description: [
      "Worked as Project Assistant & Zuora Developer, supporting subscription-based business operations through configuration, workflow management, and account handling.",
      "Developed and deployed a Zuora application for a news subscription service, enhancing billing automation and subscription tracking.",
      "Maintained multiple Zuora applications, ensuring integration efficiency, data accuracy, and process optimization.",
    ],
  },
  // {
  //   company: "B.Tech Term Projects",
  //   title: "Structural Modelling & ML Researcher",
  //   location: "IIT Tirupati",
  //   duration: "Aug 2024 – May 2025",
  //   description: [
  //     "Designed and implemented an ML-based framework to predict buckling load of castellated columns using datasets generated via Finite Element Method (FEM) simulations.",
  //     "Applied ANN, Decision Tree Regressor, and Random Forest Regressor using Python, Sci-kit Learn, achieving accurate prediction models for structural performance.",
  //   ],
  // },
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

export default Experience;
