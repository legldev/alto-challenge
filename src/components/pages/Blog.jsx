import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import PostView from "../organisms/PostView";
import PostsList from "../organisms/PostsList";

const Blog = () => {
  return (
    <Container style={{ paddingTop: "3rem" }}>
      <Row>
        <Col>
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
