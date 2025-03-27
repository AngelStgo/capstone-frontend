
import "../src/Style/ArtistPage.css";
import ArtistProfile from "../src/components/ArtistProfile";

function ArtistPage() {
  return (
    <div className="artist-page">
      <ArtistProfile isEditable={false} />
    </div>
  );
}

export default ArtistPage;
