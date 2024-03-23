const mongoose = require("mongoose");
const Movie = require("../models/movie");
const initData = require("../init/data");

const MONGO_URL = "mongodb://127.0.0.1:27017/movieHub";

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDb = async() => {
    await Movie.deleteMany({});
    await Movie.insertMany(initData.data);
    console.log("data was initialized");
}

initDb();