import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style/about.css";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container style={{ textAlign: "justify" }}>
        <h2 className="mb-4 text-center">About Me</h2>
        <Row className="align-items-center">
          <Col md={7}>
            <p>
              I am <strong>Parth Trivedi</strong>, a committed and curious civil
              engineer with a B.Tech degree from <strong>IIT Tirupati</strong>,
              currently pursuing a{" "}
              <strong>PhD in Infrastructure Engineering and Management</strong>
              in the Civil Engineering Department at <strong>IIT Kanpur</strong>
              .
            </p>
            <p>
              My academic and research interests lie in{" "}
              <strong>Construction Technology and Management</strong>,
              <strong> lean construction</strong>, and the application of{" "}
              <strong>data-driven methods</strong> to enhance infrastructure
              systems for a sustainable future.
            </p>
            <p>
              During my time at IIT Tirupati, I explored diverse areas such as{" "}
              <strong>Estimation and Construction management</strong>,
              <strong> Health Monitoring of Civil Structure</strong>, and{" "}
              <strong>
                machine learning applications in civil engineering
              </strong>
              . I worked on projects involving{" "}
              <strong>finite element modeling</strong> and{" "}
              <strong>parametric analysis</strong> to support engineering
              decision-making.
            </p>
            <p>
              Beyond academics, I served as the{" "}
              <strong>Event Manager of the Scribbles Club</strong>, where I
              combined leadership with creativity to foster an active student
              community. I also have a strong foundation in{" "}
              <strong>web development</strong> (MERN stack, Bootstrap) with
              multiple live projects and platforms under my belt.
            </p>
            <p>
              Now at IIT Kanpur, I am committed to addressing{" "}
              <strong>real-world infrastructure challenges</strong> through
              <strong> sustainable and technology-integrated approaches</strong>
              . My mission is to contribute meaningfully to India’s
              infrastructure sector by blending{" "}
              <strong>
                research, innovation, and effective management practices
              </strong>
              .
            </p>
          </Col>
          <Col md={5} className="text-center mt-4 mt-md-0">
            <ul className="list-unstyled about-highlights">
              <li>🎓 PhD Scholar – IIT Kanpur</li>
              <li>🛠️ Structural & Infrastructure Research</li>
              <li>📊 ML + FE Modeling Experience</li>
              <li>💻 Web Developer – MERN Stack</li>
              <li>🎨 Ex-Event Manager, Scribbles Club</li>
              <li>🏗️ Passionate about Lean & Sustainability</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
