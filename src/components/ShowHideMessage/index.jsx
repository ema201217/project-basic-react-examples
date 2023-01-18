import { Button, Col, Container, Row, Toast } from "react-bootstrap";
import { useShow } from "../../hook/useShow";
import './styles.css'

export const ShowHideMessage = () => {
  const { show, handleShowMessage } = useShow(false);
  
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
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
              <strong className="me-auto">ReactJS</strong>
              <small className='small'>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Primer Clase!!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
