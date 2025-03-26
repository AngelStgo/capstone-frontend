
import { useState, useEffect } from "react";
import axios from "axios";
import '../Style/Review.css'

function Review() {

        const [reviews, setReviews] = useState([]);

        // Fetch reviews from backend
        useEffect(() => {
          axios.get("http://localhost:4000/review") 
            .then((response) => {
              setReviews(response.data);
            })
            .catch((error) => {
              console.error("Error fetching reviews:", error);
            });
        }, []);
      
        return (
          <div className="home-container">
            <h2>reviews: </h2>
            <div className="reviews-list">
              {reviews.length === 0 ? (
                <p>Give us a Review!</p>
              ) : (
                reviews.map((review) => (
                  <div key={review._id} className="review-card">
                    <h3>{review.artist}</h3>
                    <p><strong>From: {review.name}</strong></p>
                    <p>⭐ {review.rating}/5</p>
                    <p>"{review.review}"</p>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      }
      

export default Review;