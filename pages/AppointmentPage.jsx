
import "../src/Style/AppointmentForm.css"

 import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    artist: "",
    date: "",
    time: "",
    serviceType: "",
    // tattooArtistId: "", // Store selected artist ID
  }); const [artist, setArtists] = useState([]); // Store artists list
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/artist") // Adjust API endpoint as needed
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });
  }, []);

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
    <div className="appointment-container">
    <h2>Book an Appointment</h2>
    <form onSubmit={handleSubmit} className="appointment-form">
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Your Phone" onChange={handleChange} required />

      {/* Artist Dropdown */}
      <select name="artist" onChange={handleChange} required>
        <option value="">Select an Artist</option>
        {artist.map((artist) => (
          <option key={artist._id} value={artist.name}>
            {artist.name}
          </option>
        ))}
      </select>

      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />

      {/* Service Type Dropdown */}
      <select name="serviceType" onChange={handleChange} required>
        <option value="">Select Service Type</option>
        <option value="tattoo">Tattoo</option>
        <option value="consultation">Consultation</option>
        <option value="touchup">Touch-Up</option>
      </select>

      <button type="submit">Book Appointment</button>
    </form>
  </div>
);
}

export default AppointmentPage;
