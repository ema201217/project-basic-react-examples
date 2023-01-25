import { Button, ButtonGroup } from "react-bootstrap";
import { filterTask } from "../../../constants";

export const TaskFilter = ({onChangeFilter}) => {
  return (
    <ButtonGroup>
      <Button variant="outline-secondary" onClick={() => onChangeFilter(filterTask.ALL)}>Todos</Button>
      <Button variant="outline-secondary" onClick={() => onChangeFilter(filterTask.PROCESS)}>En proceso</Button>
      <Button variant="outline-secondary" onClick={() => onChangeFilter(filterTask.PENDING)}>Pendiente</Button>
      <Button variant="outline-secondary" onClick={() => onChangeFilter(filterTask.COMPLETED)}>Completado</Button>
    </ButtonGroup>
  );
};
