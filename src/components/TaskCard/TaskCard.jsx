import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";
import './taskcard.css'


export function TaskCard({task}) {
  const { deleteTask } = useContext(TasksContext);
  return (
    <section className="task-card">
      <h2>{task.tittle}</h2>
      <p>{task.description}</p>
      <span onClick={() => deleteTask(task.id)} className='delete-task-button'></span>
    </section>
  );
}
