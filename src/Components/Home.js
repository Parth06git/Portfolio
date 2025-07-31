import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "./style/home.css";

const Home = () => {
  return (
    <section
      className="home-section text-white d-flex align-items-center"
      id="home"
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Hi, I'm Parth Trivedi</h1>
            <p className="lead mt-3 mb-4">
              PhD Scholar @ IIT Kanpur | Research Enthusiast
            </p>
            <Button
              variant="primary"
              href="#contact"
              className="me-3 my-2 btn-lg shadow"
            >
              Contact Me
            </Button>
            <Button
              variant="outline-light"
              href="/templates/Resume.pdf"
              target="_blank"
              className="btn-lg"
            >
              See CV
            </Button>
          </Col>
          <Col md={6} className="mt-4 mt-md-0 d-flex justify-content-center">
            <div className="glass-card">
              <Image
                src={require("./images/parth_profile.jpg")}
                fluid
                className="glass-img"
                alt="Parth Trivedi"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
