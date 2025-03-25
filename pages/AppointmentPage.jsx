

 import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
    // tattooArtistId: "", // Store selected artist ID
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/appointments", formData);
      alert("Appointment booked!");
      navigate("/appointments/confirmation"); // Redirect after success
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      {/* <input type="text" name="tattooArtistId" placeholder="Artist name" onChange={handleChange} required /> */}
      <button type="submit">Book Now</button>
    </form>
  );
}

export default AppointmentPage;
