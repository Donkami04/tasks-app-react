import { createContext, useState } from "react";
import { tasksList } from "../data/tasks";

export const TasksContext = createContext();
export function TasksContextProvider(props) {
  const [tasks, setTasks] = useState(tasksList);
  const [numbers, setNumbers] = useState(0);

  return (
    <TasksContext.Provider value={{ tasks, numbers }}>
      {props.children}
    </TasksContext.Provider>
  );
}
