
import { Link } from "react-router-dom";
import "../Style/NavBar.css";
import LogoutButton from "./Logout";

const authData = JSON.parse(localStorage.getItem("authData")); // Get stored auth data
const artistId = authData?.id; // Extract artist ID if logged in

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Astraea Luas</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Book an Appointment</Link></li>
        <li><Link to="/review">Leave a Review</Link></li>
        {authData ? (
          <>
            <li><LogoutButton /></li>
            <li><Link to={`/artist/${artistId}/dashboard`}>Dashboard</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
