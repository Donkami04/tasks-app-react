import { useState, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { TaskCard } from "../TaskCard/TaskCard";
import { CreateTask } from "../CreateTask/CreateTask";

import "./tasks.css";

// extraer Tasks del context
export function Tasks() {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      <CreateTask />
      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
