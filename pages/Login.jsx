import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../src/Style/Login.css';
// import { useAuth } from "../src/context/AuthContext";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // State for error messages
    const navigate = useNavigate(); // Use this for navigation after login
    // const { login } = useAuth(); // Get login function from AuthContext

    const login = (data) => {
        localStorage.setItem("authData", JSON.stringify(data)); // Store user data manually
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    
        try {
            const res = await axios.post("http://localhost:4000/login", formData);
            login(res.data); // Save token in localStorage
            navigate(`/artist/${res.data.id}`);
            console.log(res.data);
            
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Login</h2>

                {/* Display error message */}
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

