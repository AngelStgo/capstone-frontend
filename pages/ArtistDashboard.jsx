import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtistDashboard() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [newPhoto, setNewPhoto] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/auth/artist/${id}`)
      .then((response) => setArtist(response.data))
      .catch((error) => console.error("Error fetching artist profile:", error));
  }, [id]);

  const handlePhotoUpload = async () => {
    if (!newPhoto) return;
    try {
      await axios.put(`http://localhost:4000/artists/${id}/add-photo`, { photo: newPhoto });
      setArtist((prev) => ({ ...prev, photos: [...prev.photos, newPhoto] }));
      setNewPhoto("");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleDeletePhoto = async (photo) => {
    try {
      await axios.put(`http://localhost:4000/artists/${id}/delete-photo`, { photo });
      setArtist((prev) => ({
        ...prev,
        photos: prev.photos.filter((p) => p !== photo),
      }));
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  if (!artist) return <p>Loading artist profile...</p>;

  return (
    <div>
      <h2>Welcome, {artist.name}!</h2>
      <p>Specialty: {artist.specialty}</p>

      <h3>Upload New Portfolio Image</h3>
      <input type="text" placeholder="Image URL" value={newPhoto} onChange={(e) => setNewPhoto(e.target.value)} />
      <button onClick={handlePhotoUpload}>Upload</button>

      <h3>Your Portfolio</h3>
      <div>
        {artist.photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt="Tattoo" style={{ width: "100px" }} />
            <button onClick={() => handleDeletePhoto(photo)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistDashboard;
