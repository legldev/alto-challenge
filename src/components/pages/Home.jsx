import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageHero from "../atoms/ImageHero";
import { Content } from "../molecules/Content";

const Home = () => {
  return (
    <main>
      <Container fluid>
        <Row>
          <Col style={{ padding: "0" }}>
            <ImageHero
              src={"https://via.placeholder.com/1200x400"}
              alt="Hero Image"
            />
          </Col>
        </Row>
        <Content />
      </Container>
    </main>
  );
};

export default Home;
