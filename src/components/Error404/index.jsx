import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} className="my-4">
          <img
            className="w-100"
            src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
            alt=""
          />
          <Alert variant="warning" key="warning" className="text-center">
            <Alert.Link as={Link} to="/" variant="warning">
              Volver al Home
            </Alert.Link>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};