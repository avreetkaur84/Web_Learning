import { useState, useEffect } from "react";
import axios from 'axios';

export default function ActionMovies() {
    const [actionMovies, setActionMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/action')
        .then((response) => {
            setActionMovies(response.data);
        }) .catch((error) => {
            console.log(error);
        })
    })

    return (
        <div className="actionMovies">
            <h1>Action Movies</h1>
            {
                actionMovies.map((movie) => (
                    <div className="movie">
                        <h2>{movie.title}</h2>
                        <h3>{movie.genre}</h3>
                    </div>
                ))
            }
        </div>
    );
}