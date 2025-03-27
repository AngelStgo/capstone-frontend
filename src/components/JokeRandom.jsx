// src/components/JokeComponent.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/Joke.css'

const JokeComponent = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from an API when the component mounts
    const fetchJoke = async () => {
      try {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        setJoke(response.data.setup + " - " + response.data.punchline);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data.");
        setLoading(false);
        console.error(err)
      }
    };

    fetchJoke();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="joke-container">
      <h2>Random Joke</h2>
      <p>{joke}</p>
    </div>
  );
};

export default JokeComponent;
