import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container style={{ paddingTop: "3rem" }}>
      <Row>
        <Col>
          <h2>Contact Information</h2>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 1234 Elm Street, Springfield, USA
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
