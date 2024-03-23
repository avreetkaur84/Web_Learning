const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Movie = require("./models/movie");

const MONGO_URL = "mongodb://127.0.0.1:27017/movieHub";

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hi, I am Root!!");
});

app.get("/api/allMovies", async(req, res) => {
    const allMovies = await Movie.find({});
    res.json(allMovies);
});

app.get("/comedy", async(req, res) => {
    const comedyMovies = await Movie.find({ genre: 'Comedy' });
    res.json(comedyMovies);
});

app.get("/romance", async(req, res) => {
    const romanceMovies = await Movie.find({ genre: 'Romance' });
    res.json(romanceMovies);
});

app.get("/horror", async(req, res) => {
    const horrorMovies = await Movie.find({ genre: 'Horror' });
    res.json(horrorMovies);
});

app.get("/api/action", async(req, res) => {
    const actionMovies = await Movie.find({ genre: 'Action' });
    res.json(actionMovies);
});

app.get("/drama", async(req, res) => {
    const dramaMovies = await Movie.find({ genre: 'Drama' });
    res.json(dramaMovies);
});

app.get("/scienceFiction", async(req, res) => {
    const scienceFictionMovies = await Movie.find({ genre: 'Science Fiction' });
    res.json(scienceFictionMovies);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})