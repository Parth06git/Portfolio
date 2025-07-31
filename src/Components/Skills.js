import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style/skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming",
      skills: [
        "Python",
        "C",
        "C++",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      title: "Engineering Skills",
      skills: [
        "Surveying",
        "Construction Materials and Technology",
        "Structural Analysis",
        "Finite Element Modeling",
        "Concrete Design",
        "Steel Design",
        "Construction Planning and Management",
        "SHM",
      ],
    },
    {
      title: "Engineering Tools",
      skills: ["AutoCAD", "ETABS", "ABAQUS", "Excel", "PowerPoint", "Word"],
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Bootstrap",
        "MySQL",
        "Scikit-learn",
        "Machine Learning",
        "Zuora",
      ],
    },
    {
      title: "General Skills",
      skills: [
        "Fast Learner",
        "Time Management",
        "Resourse Management",
        "Event Management",
        "Leadership",
        "Team Collaboration",
        "Problem-Solving",
        "Multi-tasking",
        "Designing",
      ],
    },
  ];

  const renderBadges = (skills) =>
    skills.map((skill, index) => (
      <span key={index} className="badge bg-secondary text-light me-2 mb-2">
        {skill}
      </span>
    ));

  return (
    <section id="skills" className="bg-light py-5">
      <Container>
        <h2 className="mb-5 text-center">Skills</h2>
        <Row>
          {skillsData.map((category, idx) => (
            <Col md={6} lg={6} className="mb-4" key={idx}>
              <Card className="shadow-sm h-100 skill-card">
                <Card.Body>
                  <Card.Title className="mb-3 text-danger fw-semibold">
                    {category.title}
                  </Card.Title>
                  <Card.Text>{renderBadges(category.skills)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
