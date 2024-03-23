import MainCard from "./MainCard";
import "./MainSection.css"

export default function MainSection() {
    return(
        <div className="mainSection">
            <h1 className="mainHead">Discover Your Favorite Genres</h1>
            <div className="cardSection">
                <MainCard genreName="Comedy" genreImage="images\comedy.png" genreDiscription="Laughs, chuckles, and feel-good movies to brighten your day" />
                <MainCard genreName="Action" genreImage="images\action.jpeg" genreDiscription="Adrenaline-pumping movies filled with thrilling sequences and heroic feats." />
                <MainCard genreName="Romance" genreImage="images\romance.webp" genreDiscription="Heartwarming stories of love, passion, and relationships." />
                <MainCard genreName="Drama" genreImage="images\Drama.jpeg" genreDiscription="Captivating tales of human emotion, portraying life's complexities and heartfelt journeys." />
                <MainCard genreName="Science Fiction" genreImage="images\scienceFiction.jpeg" genreDiscription="Explore futuristic worlds and mind-bending concepts." />
                <MainCard genreName="Horror" genreImage="images\horror.jpeg" genreDiscription="Spine-chilling tales to keep you at the edge of your seat." />
            </div>
        </div>
    );
}