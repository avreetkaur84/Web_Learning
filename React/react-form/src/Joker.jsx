import { useState, useEffect } from "react";

export default function Joker() {
    let URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async() => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    };

    // For fetching the data for first time, we use useEffect. here it is used for displaying the joke as the page refreshes or page appears
    useEffect(() => {
        async function getFirstJoke() {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    }
    getFirstJoke();
    }, []);

    let [joke, setJoke] = useState({});

    return(
        <div>
            <h1>Joker!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    );
}