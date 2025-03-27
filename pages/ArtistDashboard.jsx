import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArtistProfile from "../src/components/ArtistProfile";

function ArtistDashboard() {
  const authData = JSON.parse(localStorage.getItem("authData"));
  const navigate = useNavigate();

  // Use useEffect to handle navigation after component mounts
  useEffect(() => {
    if (!authData) {
      navigate("/login");
    }
  }, [authData, navigate]); // Only runs when authData or navigate changes

  // Prevent rendering the dashboard if user is not authenticated
  if (!authData) return null;

  return (
    <div>
      <h2>Artist Dashboard</h2>
      <ArtistProfile isEditable={true} />
    </div>
  );
}

export default ArtistDashboard;

