import Footer from "../src/components/Footer";
import "../src/Style/ArtistPage.css";
import ArtistProfile from "../src/components/ArtistProfile";

function ArtistPage() {
  return (
    <div className="artist-page">
      <ArtistProfile isEditable={false} />
      <Footer />
    </div>
  );
}

export default ArtistPage;
