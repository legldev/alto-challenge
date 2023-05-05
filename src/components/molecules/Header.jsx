import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../atoms/Logo";
import MainMenu from "../molecules/MainMenu";
import SearchBar from "../molecules/SearchBar";

const Header = () => {
  return (
    <header className="App-header">
      <Container>
        <Row>
          <Col sm={4}>
            <Logo
              img={"https://placehold.co/160x90?font=roboto&text=BlogLogo"}
              alt={"Logo"}
            />
          </Col>
          <Col
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <MainMenu />
          </Col>
          <Col
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
