
import { Link } from "react-router-dom";
import "../Style/NavBar.css" 

function NavBar() {
  return (
    <nav className="navbar">
    <h1>Tattoo Studio</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/appointment">Book Appointment</Link></li>
      <li><Link to="/artists">Artists</Link></li>
    </ul>
  </nav>
);
}

export default NavBar;
