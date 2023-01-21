import { Form, Button } from "react-bootstrap";

export const FormTask = ({ onChange, inputsValues, onSubmit, refForm }) => {
  return (
    <Form onSubmit={onSubmit} ref={refForm}>
      <Form.Group className="mb-3">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar un titulo"
          value={inputsValues.title}
          onChange={onChange}
          name="title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar un url"
          value={inputsValues.img}
          onChange={onChange}
          name="img"
        />
      </Form.Group>

      
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          as={"textarea"}
          value={inputsValues.description}
          placeholder="Ingresar una descripción"
          onChange={onChange}
          name="description"
        />
      

      <Button variant="success" type="submit" className="mx-2">
        Agregar
      </Button>
      <Button variant="danger" type="reset">
        Reiniciar
      </Button>
    </Form>
  );
};
