import { TasksContext } from "../../context/TasksContext";
import { useContext, useState } from "react";
import "./createtask.css";

export function CreateTask() {
  const { createTask } = useContext(TasksContext);
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      tittle,
      description,
    };

    createTask(newTask);
    setTittle("");
    setDescription("");
  };

  return (
    <div className="create-task-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTittle(e.target.value)}
          placeholder="Tittle new task"
          value={tittle}
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
          value={description}
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}
