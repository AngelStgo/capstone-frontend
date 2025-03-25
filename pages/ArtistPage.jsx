
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtistPage = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/artist/${id}`)
            setArtist(response.data)
        } catch (e) {
            console.error("Error fetching artist:", e );
        }
    }
    fetchArtistPage()
     // .then((response) => setArtist(response.data))
    //   .catch((error) => console.error("Error fetching artist:", error));
   }, [id]);
   
 

  if (!artist) return <p>Just a sec...</p>;

  return (
    <div>
        {/* how to add {artist.name} inside Header as props? */}
        {/* <Header/> */}
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <h3>Specialty: {artist.specialty}</h3>
      <div className="artistGallery">
        {/* {artist.images.map((img, index) => (
          <img key={index} src={img} alt={`Art by ${artist.name}`} />
        ))} */}
      </div>
      <Footer/>
    </div>
  );
}

export default ArtistPage;