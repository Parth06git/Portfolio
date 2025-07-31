import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/hoverEffect.css";

const Education = () => {
  const educationData = [
    {
      degree: "PhD",
      institute: "Indian Institute of Technology, Kanpur",
      score: "NA",
      year: "2025 – present",
    },
    {
      degree: "B.Tech",
      institute: "Indian Institute of Technology, Tirupati",
      score: "8.74 CGPA",
      year: "2021 – 2025",
    },
    {
      degree: "Senior Secondary",
      institute: "Prince School (RBSE Board)",
      score: "99.4%",
      year: "2021",
    },
    {
      degree: "Secondary",
      institute: "Akhil Bharti s.s. sec school (RBSE Board)",
      score: "93.0%",
      year: "2019",
    },
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Education</h2>
        <Row>
          {educationData.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="hover-card h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{item.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.institute}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Grades/Percentage:</strong> {item.score}
                    <br />
                    <strong>Year:</strong> {item.year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
