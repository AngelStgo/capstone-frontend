
import ArtistPage from "./ArtistPage";

function ArtistCard() {
    return (
        <div className="artistCard">
                <h2>Artist Name</h2>
                <a href={ArtistPage}>View Gallery</a>
                <p>Bio: Some basic information.</p>
                <p>"Artista multifacético especializada en arte digital , tradicional y tatuajes. Graduada de la universidad de Sagrado corazón"</p>
        </div>
    )
};

export default ArtistCard;