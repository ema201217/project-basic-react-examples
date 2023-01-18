import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useShow } from "../../../hook/useShow";

const arrColors = ["red", "blue", "green", "lightblue", "yellow", "pink"];
export const ShowHideMessage2 = () => {
  const [show, setShow] = useState(false);
  const [linkActive, setLinkActive] = useState(false);
  const [date, setDate] = useState("");
  const [intervalColor, setIntervalColor] = useState(null);
  const [colorTitle, setColorTitle] = useState("");

  const handleShowMessage = () => {
    setShow(!show);
    if (show && intervalColor) {
      clearInterval(intervalColor);
    } else {
      const interval = setInterval(() => {
        const indexRandom = Math.round(Math.random() * (arrColors.length - 1));
        setColorTitle(() => {
          console.log("indexRandom", indexRandom);
          setColorTitle(arrColors[indexRandom]);
        });
      }, 500);
      setIntervalColor(interval);
    }
  };

  const handleLinkActive = () => setLinkActive(true);

  useEffect(() => {
    if (show) {
      setDate(new Date().toLocaleString());
    }
  }, [show]);

  return (
    <Container>
      <Row className="mt-5">
        <Col
          xs={12}
          lg={{ span: 6, offset: show ? 3 : 0 }}
          className="text-center"
        >
          <Button
            className="mb-2"
            variant={show ? "danger" : "success"}
            onClick={handleShowMessage}
          >
            {show ? "Ocultar" : "Mostrar"} mensaje
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="m-auto">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto" style={{ color: colorTitle }}>
                ReactJS
              </strong>
              <small>{date}</small>
            </Toast.Header>
            <Toast.Body>Primer Clase!!</Toast.Body>
          </Toast>
        </Col>
        {!show && (
          <Col xs={12} lg={6}>
            <Alert variant="primary">
              <Alert.Heading>La tostada esta oculta</Alert.Heading>
              {!linkActive ? (
                <Button
                  variant="outline-light"
                  className="fw-bold"
                  onClick={handleLinkActive}
                >
                  Mostrar link del siguiente ejemplo
                </Button>
              ) : (
                <Alert.Link as={Link} to="/progressBar">
                  Barra de progreso
                </Alert.Link>
              )}
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};
