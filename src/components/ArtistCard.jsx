
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profileIcon.png"


// RENDER your artists data 
function ArtistCard() {
    const [artist, setArtists] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/artist") // Fetch from backend
        .then((response) => setArtists(response.data))
        .catch((error) => console.error("Error fetching artists:", error));
    }, []);
  
    return (
      <div className="artistDisplay">
      {artist.map((artist) => (
        <div key={artist._id} className="artistCard"> 
          <img src={profilePic} alt="profile photo"/>
          <Link to={`/artist/${artist._id}`}>View Gallery</Link> 
          <h2>{artist.name}</h2>
          <p>{artist.specialty}</p>
          <p>{artist.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;