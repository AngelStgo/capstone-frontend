

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

import '../style/ArtistPage.css'

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const authData = JSON.parse(localStorage.getItem("authData")); // Get logged-in user info

  useEffect(() => {
    const fetchArtistPage = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/artist/${id}`);
        setArtist(response.data);
      } catch (e) {
        console.error("Error fetching artist:", e);
      }
    };

    fetchArtistPage();
    const interval = setInterval(fetchArtistPage, 5000);
    return () => clearInterval(interval);
  }, [id]);

  // Handle Image Upload
  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const response = await axios.post(
        `http://localhost:4000/artist/${id}/upload-photo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authData.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setArtist((prev) => ({
        ...prev,
        photos: [...prev.photos, response.data.photoUrl],
      }));

      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  if (!artist) return <p>Just a sec...</p>;

  return (
    <div className="artist-page">
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <h3>Specialty: {artist.specialty}</h3>

      {/* Only show upload form if artist is logged in */}
      {authData?.id === id && (
        <div>
          <h3>Upload New Portfolio Image</h3>
          <input 
            type="file" 
            onChange={(e) => setSelectedFile(e.target.files[0])} 
          />
          <button onClick={handleImageUpload}>Upload</button>
        </div>
      )}

      {/* Display Portfolio */}
      <h3>Portfolio Gallery</h3>
      <div className="portfolio-gallery">
        {/* {artist.photos.map((img, index) => (
          <img key={index} src={`http://localhost:4000${img}`} alt={`Art by ${artist.name}`} />
        ))} */}
      </div>

      <Footer/>
    </div>
  );
}

export default ArtistPage;
