import { Container, Row, Col } from "react-bootstrap";

export const Content = () => {
  return (
    <Container>
      <Row className="content">
        <Col md={6}>
          <Row>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis harum rerum, tempora ratione in architecto quibusdam
              autem illo, vel, dolorum hic asperiores quisquam fugiat. Qui, non
              nihil! Omnis, veritatis non?
            </p>
          </Row>
          <Row>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wtlO-K4qur8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col xs={12} md={4}>
              <img src="https://via.placeholder.com/150" alt="Post 1" />
            </Col>
            <Col xs={12} md={8}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos assumenda quas nostrum ducimus! Eveniet quos
                reprehenderit alias dignissimos explicabo culpa minima, nisi,
                labore aliquid cum, nobis illum corporis molestias? Suscipit.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <img src="https://via.placeholder.com/150" alt="Post 1" />
            </Col>
            <Col xs={12} md={4}>
              <img src="https://via.placeholder.com/150" alt="Post 2" />
            </Col>
            <Col xs={12} md={4}>
              <img src="https://via.placeholder.com/150" alt="Post 3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
