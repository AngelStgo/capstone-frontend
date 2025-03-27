import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Style/NavBar.css";

function NavBar() {
    const [authData, setAuthData] = useState(JSON.parse(localStorage.getItem("authData")));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authData"); // Clear localStorage
        setAuthData(null); // Update state to reflect logout
        navigate("/login"); // Redirect to login
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setAuthData(JSON.parse(localStorage.getItem("authData"))); // Sync changes in localStorage
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <nav className="navbar">
            <h1>Astraea Luas</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointment">Book an Appointment</Link></li>
                <li><Link to="/review">Leave a Review</Link></li>
                {authData ? (
                    <>
                        <li><button onClick={handleLogout}>Logout</button></li>
                        <li><Link to={`/artist/${authData.id}/dashboard`}>Dashboard</Link></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
