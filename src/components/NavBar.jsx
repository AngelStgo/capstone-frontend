
import { Link } from "react-router-dom";
import "../Style/NavBar.css" 

function NavBar() {
  return (
    <nav className="navbar">
    <h1>Astraea Luas</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/appointment">Book an Appointment</Link></li>
      <li><Link to="/review">Leave a Review</Link></li>
    </ul>
  </nav>
);
}

export default NavBar;
