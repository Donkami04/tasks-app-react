import { createContext, useState } from "react";
import { tasksList } from "../data/tasks";

export const TasksContext = createContext();
export function TasksContextProvider(props) {
  const [tasks, setTasks] = useState(tasksList);

  function createTask(newTask) {

    setTasks([
      ...tasks,
      {
        id: tasks.length,
        tittle: newTask.tittle,
        description: newTask.description,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id!== id));
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TasksContext.Provider>
  );
}
