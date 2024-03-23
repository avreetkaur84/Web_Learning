import { useState, useEffect } from "react";
import axios from 'axios';

export default function AllMovies() {
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/allMovies')
        .then((response) => {
            setAllMovies(response.data);
        }) .catch((error) => {
            console.log(error);
        })
    })

    return (
        <div className="AllMovies">
            <h1>All Movies</h1>
            {
                allMovies.map((movie) => (
                    <div className="movie">
                        <h2>{movie.title}</h2>
                        <h3>{movie.genre}</h3>
                    </div>
                ))
            }
        </div>
    );
}