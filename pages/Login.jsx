import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Uncomment this to enable navigation
import axios from "axios";
import '../src/Style/Login.css';

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // State for error messages
    const navigate = useNavigate(); // Use this for navigation after login

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting:", formData); // Debugging: Check what is being sent
        setError("");
    
        try {
            const res = await axios.post("http://localhost:4000/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            alert(`Logged in as ${res.data.role}`);
            navigate("auth/artist/:id");
        } catch (error) {
            console.error("Login Error:", error.response ? error.response.data : error.message);
            setError(error.response?.data?.message || "Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {/* Show error message if there was an error */}
                {error && <div className="error-message">{error}</div>}

                <input 
                    name="email" 
                    type="email" 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                    autoComplete="email"
                />
                <input 
                    name="password" 
                    type="password" 
                    onChange={handleChange} 
                    placeholder="Password" 
                    required 
                    autoComplete="current-password" 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

