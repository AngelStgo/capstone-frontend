
import Header from "./Header";
import Footer from "./Footer"

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/artist/${id}`)
    .then((response) => setArtist(response.data))
      .catch((error) => console.error("Error fetching artist:", error));
  }, [id]);

  if (!artist) return <p>Just a sec...</p>;

  return (
    <div>
        {/* how to add {artist.name} inside Header as props? */}
        <Header/>
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <h3>Specialty: {artist.specialty}</h3>
      <div className="artistGallery">
        {artist.images.map((img, index) => (
          <img key={index} src={img} alt={`Artwork by ${artist.name}`} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default ArtistPage;