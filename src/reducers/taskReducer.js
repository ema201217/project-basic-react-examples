const generateId = () => Math.random().toString(36).substring(2, 18);

export const taskReducer = (state, action) => {
  // {type,payload}

  switch (action.type) {
    case "ADD":
      const inputsValues =
        action.payload; /* ingresa una tarea tipo de dato "object" */
      const newTask = {
        ...inputsValues,
        id: generateId(),
        active: false,
        completed: false,
        date: new Date().toLocaleString() /*  dd/mm/yyyy 00:00:00   */,
      };

      return [...state, newTask];

    case "UPDATE":
      const taskToUpdate =
        action.payload; /* ingresa una tarea tipo de dato "object" */
      const tasksUpdated = state.map((task) => {
        if (task.id === taskToUpdate.id) {
          return {
            ...task,
            ...taskToUpdate,
          };
        }
        return task;
      });
      return tasksUpdated;

    case "DELETE":
      const idTaskToDelete = action.payload; /* ingresa un ID de tarea */
      const restTask = state.filter((task) => task.id !== idTaskToDelete);
      return restTask;

    case "TOGGLE_ACTIVE":
      const idTaskToActive = action.payload; /* ingresa un ID de tarea */
      const tasksUpdatedActive = state.map((task) => {
        if (task.id === idTaskToActive) {
          return {
            ...task,
            active: !task.active,
            completed: task.completed ? false : task.completed
          };
        }
        return task;
      });
      return tasksUpdatedActive;

    case "TOGGLE_COMPLETE":
      const idTaskToCompleted = action.payload; /* ingresa un ID de tarea */
      const tasksUpdatedCompleted = state.map((task) => {
        if (task.id === idTaskToCompleted) {
          return {
            ...task,
            completed: !task.completed,
            active: task.active ? false : task.active,
          };
        }
        return task;
      });
      return tasksUpdatedCompleted;

    default:
      return state;
  }
};