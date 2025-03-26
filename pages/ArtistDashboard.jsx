import { useNavigate } from "react-router-dom";
import ArtistProfile from "../src/components/ArtistProfile";

function ArtistDashboard() {
  const authData = JSON.parse(localStorage.getItem("authData"));
  const navigate = useNavigate();

  if (!authData) {
    navigate("/login");
    return null;
  }

  return (
    <div>
      <h2>Artist Dashboard</h2>
      <ArtistProfile isEditable={true} />
    </div>
  );
}

export default ArtistDashboard;
