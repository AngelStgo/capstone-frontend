
import Header from "../src/components/Header";
import ArtistCard from "../src/components/ArtistCard";
import InfoBar from "../src/components/InfoBar";
import Review from "../src/components/Review";
import ApiDisplay from "../src/components/ApiDisplay";
import Footer from "../src/components/Footer";

function Homepage() {
    return(
        <div>
            <Header/>

      <main>
        <InfoBar/>
      </main>

      {/* render your artist in the cards, only need 1 reusable ArtistCard component */}
      <ArtistCard/>
      
      <article>
         <Review/>
      </article>
     
      <ApiDisplay/>

      <footer>
         <Footer/>
      </footer>
        </div>
    )
}

export default Homepage;