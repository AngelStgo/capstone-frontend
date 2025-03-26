
import { Link } from "react-router-dom";
import "../Style/NavBar.css" 
import LogoutButton from "./Logout";

const token = localStorage.getItem("token");

function NavBar() {
  return (
    <nav className="navbar">
    <h1>Astraea Luas</h1>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/appointment">Book an Appointment</Link></li>
      <li><Link to="/review">Leave a Review</Link></li>
      <li><Link to="/login">Login</Link></li>
      {token ? <li><LogoutButton /></li> : <li><a href="/login">Login</a></li>}
    </ul>
  </nav>
);
}

export default NavBar;
