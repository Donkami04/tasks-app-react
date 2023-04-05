import { Link } from "react-router-dom"
import './header.css'

export function Header() {
  return (
    <nav className="header-container">
      <h1 className="logo"><Link to='/'>📚TasksApp</Link></h1>
      <div className="navbar-container">
          <li><Link to='/tasks'>Tasks</Link></li>
          <li><Link to='/users'>Users</Link></li>
      </div>
    </nav>
  );
}