
import Header from "../src/components/Header";
import ArtistCard from "../src/components/ArtistCard";
import InfoBar from "../src/components/InfoBar";
import Review from "../src/components/Review";
import JokeRandom from '../src/components/JokeRandom'
import Footer from "../src/components/Footer";

function Homepage() {
    return(
        <div>
         <Header/>

      <main>
        <InfoBar/>
      </main>

      <ArtistCard/>
      
      <article>
         <Review/>
      </article>
     
      <JokeRandom/>

      <footer>
         <Footer/>
      </footer>
        </div>
    )
}

export default Homepage;