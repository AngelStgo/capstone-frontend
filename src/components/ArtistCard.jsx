
import axios from "axios"
import ArtistPage from "../../pages/ArtistPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profileIcon.png"


// RENDER your artists data 
function ArtistCard() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/artist") // Fetch from backend
        .then((response) => setArtists(response.data))
        .catch((error) => console.error("Error fetching artists:", error));
    }, []);
  
    return (
      <div className="artistDisplay">
        {artists.map((artist) => (
          <div className="artistCard">
            <img src={profilePic} alt="profile photo"/>
            <Link key={artist._id} to={`/api/artist/${artist._id}`} >View Gallery</Link>
            <h2>{artist.name}</h2>
            <p>{artist.specialty}</p>
            <p>{artist.bio}</p>
          </div>
        ))}
      </div>
    );
};

export default ArtistCard;