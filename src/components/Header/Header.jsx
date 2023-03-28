import { Link } from "react-router-dom"
import './header.css'

export function Header() {
  return (
    <div className="header-container">
      <h1 className="logo"><Link to='/'>My Tasks App</Link></h1>
      <nav className="navbar-container">
          <li><Link to='/tasks'>Tasks</Link></li>
          <li><Link to='/users'>Users</Link></li>
      </nav>
    </div>
  );
}