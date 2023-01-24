import { useReducer } from "react";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "../../hook/useForm";
import { CardItem } from "./CardItem";
import { FormTask } from "./Form";

const generateId = () => Math.random().toString(36).substring(2, 18);

const taskReducer = (state, action) => {
  // {type,payload}

  switch (action.type) {
    case "ADD":
      const newTask = {
        ...action.payload,
        id: generateId(),
        active: false,
        completed: false,
      };

      return [...state, newTask];

    case "UPDATE":
      const taskToUpdate = action.payload
      const tasksUpdated = state.map((task) => {
        if(task.id === taskToUpdate.id){
          return {
            ...task,
            ...taskToUpdate
          }
        }
        return task
      })
      return tasksUpdated;

    default:
      return state;
  }
};

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

  const [tasks, dispatch] = useReducer(taskReducer, []); // dispatch({type,payload})

  const handleSubmit = (e) => {
    e.preventDefault();

    if(action === "CREATE"){
      dispatch({ type: "ADD", payload: inputsValues });
    }

    if(action === "UPDATE"){
      dispatch({ type: "UPDATE", payload: inputsValues });
    }

    reset();
  };

  

  const handleUpdate = (id) => {
    // console.log("quiero actualizar el producto" + id);
    const taskFound = tasks.find((task) => task.id === id);
    setInputsValues(taskFound);
    setAction("UPDATE")
  };

  /*{
      title:"titulo 1",
      img:"https://img/perritos.png",
      description: "description"
  }*/

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} lg={3}>
          <FormTask
            onChange={handleChangeInputsValue}
            onSubmit={handleSubmit}
            inputsValues={inputsValues}
            refForm={refForm}
            action={action}
          />
        </Col>
        <Col sm={12} lg={9}>
          {tasks.map((task) => {
            return (
              <CardItem key={task.id} task={task} onUpdate={handleUpdate} />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
