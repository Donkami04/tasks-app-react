import { allUsers } from "../../data/users";
import "./users.css";

export function Users() {
  return (
    <div className="users-container">
      {allUsers.map((user, i) => (
        <main className="users-card" key={i}>
          <img src={user.image} />
          <p>{user.name}</p>
          <p>{user.age}</p>
        </main>
      ))}
    </div>
  );
}
