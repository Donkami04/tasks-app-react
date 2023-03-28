export function TaskCard({task}) {
  return (
    <section className="task">
      <h2>{task.tittle}</h2>
      <p>{task.description}</p>
    </section>
  );
}
