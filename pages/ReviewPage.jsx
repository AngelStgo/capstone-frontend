import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../src/Style/ReviewForm.css"

function ReviewPage() {
    const [reviewData, setReviewData] = useState({
        name: "",
        review: "",
        artist: "",
        rating: "",
      });
    
      const [artists, setArtists] = useState([]); // Store tattoo artists
    
      const navigate = useNavigate();
    
      // Fetch artists from the backend
      useEffect(() => {
        axios.get("http://localhost:4000/artist") // Update with your API route
          .then((response) => {
            setArtists(response.data);
          })
          .catch((error) => {
            console.error("Error fetching artists:", error);
          });
      }, []);
    
      const handleChange = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:4000/api/review", reviewData);
          alert("Review submitted! Thank you!");
          navigate("/"); // Redirect to Home Page after submission
        } catch (error) {
          console.error("Error submitting review:", error);
        }
      };
    
      return (
        <div className="review-container">
          <h2>Leave a Review</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />

    <textarea name="review" placeholder="Write your review..." rows="4" onChange={handleChange} required></textarea>

            {/* Artists list */}
            <select name="artist" onChange={handleChange} required>
              <option value="">Select an Artist</option>
              {artists.map((artist) => (
                <option key={artist._id} value={artist.name}>
                  {artist.name}
                </option>
              ))}
            </select>
    
            {/* Rating Dropdown */}
            <select name="rating" onChange={handleChange} required>
              <option value="">Rate Us (1-5)</option>
              <option value="1">⭐ 1 - Poor</option>
              <option value="2">⭐⭐ 2 - Fair</option>
              <option value="3">⭐⭐⭐ 3 - Good</option>
              <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
              <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
            </select>
    
            
            <button type="submit">Submit Review</button>
          </form>
        </div>
      );
    }

export default ReviewPage;
