import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <Container
      fluid
      style={{ display: "grid", alignContent: "center", height: "90vh" }}
    >
      <Row>
        <Col lg={{ span: 6, offset: 4 }}>
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s9a981265d3e417c5/image/if88cdc9bbbf286c0/version/1430508994/image.png"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};
