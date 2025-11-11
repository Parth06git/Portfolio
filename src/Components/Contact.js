import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    const mailtoLink = `mailto:parthtrivedi0612@gmail.com?subject=Portfolio Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setError("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Contact Me</h2>

        {submitted && (
          <Alert
            variant="success"
            onClose={() => setSubmitted(false)}
            dismissible
          >
            Message opened in your mail client. Thank you!
          </Alert>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingName"
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <label htmlFor="floatingName">Name</label>
              </Form.Floating>
            </Col>
            <Col md={6}>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingEmail"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <label htmlFor="floatingEmail">Email</label>
              </Form.Floating>
            </Col>
          </Row>

          <Form.Floating className="mb-4">
            <Form.Control
              id="floatingMessage"
              as="textarea"
              name="message"
              placeholder="Leave a message here"
              value={formData.message}
              style={{ height: "150px" }}
              onChange={handleChange}
            />
            <label htmlFor="floatingMessage">Message</label>
          </Form.Floating>

          <div className="d-flex flex-column flex-md-row gap-3">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
            <Button
              variant="outline-secondary"
              href="https://www.linkedin.com/in/parth-trivedi-357916268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LinkedIn Profile
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
