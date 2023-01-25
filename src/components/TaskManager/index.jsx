import { useEffect } from "react";
import { useReducer } from "react";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { filterTask } from "../../constants";
import { useForm } from "../../hook/useForm";
import { taskReducer } from "../../reducers/taskReducer";
import { CardItem } from "./CardItem";
import { FormTask } from "./Form";
import { TaskFilter } from "./TaskFilter";

export const TaskManager = () => {
  const formTaskInitialState = {
    id: "",
    title: "",
    description: "",
    img: "",
    active: false,
    completed: false,
    date: "",
  };
  const refForm = useRef(null);
  const [inputsValues, setInputsValues, handleChangeInputsValue, reset] =
    useForm(formTaskInitialState, refForm);
  const [action, setAction] = useState("CREATE");
  const [statusFilter, setStatusFilter] = useState(filterTask.ALL);

  const tasksStore = localStorage.getItem("tasks")
  const initialStateReducer = JSON.parse(tasksStore) || []
  const [tasks, dispatch] = useReducer(taskReducer, initialStateReducer); // dispatch({type,payload})

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "CREATE") {
      dispatch({ type: "ADD", payload: inputsValues });
      /* 
      {
    id,
    title,
    description,
    img,
    active,
    completed,
    date,
  } */
    }

    if (action === "UPDATE") {
      dispatch({ type: "UPDATE", payload: inputsValues });
      /* 
      {
    id,
    title,
    description,
    img,
    active,
    completed,
    date,
  } */
    }

    reset();
    setAction("CREATE");
  };

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleUpdate = (id) => {
    // console.log("quiero actualizar el producto" + id);
    const taskFound = tasks.find((task) => task.id === id);
    setInputsValues(taskFound);
    setAction("UPDATE");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id }); /* 12ggvdwvu123 */
  };

  const handleTaskActive = (id) => {
    dispatch({ type: "TOGGLE_ACTIVE", payload: id }); /* 12ggvdwvu123 */
  };

  const handleTaskCompleted = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id }); /* 12ggvdwvu123 */
  };

  const handleStatusFilter = (status = "") => {
    setStatusFilter(status);
  };

  const filterTaskMethod = (task) => {
    switch (statusFilter) {
      case filterTask.PROCESS:
        return task.active === true;
      case filterTask.PENDING:
        return task.active === false;
      case filterTask.COMPLETED:
        return task.completed === true;
      default:
        return task;
    }
  }

  const handleReset = () => {
    reset()
  }

  /*{
      title:"titulo 1",
      img:"https://img/perritos.png",
      description: "description"
  }*/

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} lg={{ span: 6, offset: 5 }} className="mb-4">
          <TaskFilter onChangeFilter={handleStatusFilter} />
        </Col>
        <Col sm={12} lg={3}>
          <FormTask
            onChange={handleChangeInputsValue}
            onSubmit={handleSubmit}
            inputsValues={inputsValues}
            refForm={refForm}
            action={action}
            onReset={handleReset}
          />
        </Col>
        <Col
          sm={12}
          lg={9}
          className="d-flex flex-wrap align-items-start gap-2"
        >
          {tasks
            .filter(filterTaskMethod)
            .map((task) => {
              return (
                <CardItem
                  key={task.id}
                  task={task}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  onActive={handleTaskActive}
                  onCompleted={handleTaskCompleted}
                />
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};
