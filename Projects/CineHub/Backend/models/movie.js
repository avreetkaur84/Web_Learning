const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movie_id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: ['Action', 'Comedy', 'Horror', 'Science Fiction', 'Romance', 'Drama'],
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  movieURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;