const mongoose = require('mongoose');

// Ye hai blueprint - har movie mein ye fields honge
const movieSchema = new mongoose.Schema({
    title: {
        type: String,      // Title text hoga
        required: true      // Ye dena zaroori hai
    },
    genre: {
        type: String,       // Jaise Action, Comedy
        required: true
    },
    rating: {
        type: Number,       // 1 se 10 ke beech
        default: 0          // Agar na do to 0
    },
    year: {
        type: Number,       // Release year
        required: true
    },
    description: {
        type: String,       // Movie ke baare mein
        default: ''         // Agar na do to khali
    }
});

// Schema se model banaya
const Movie = mongoose.model('Movie', movieSchema);

// Bahar bhejo taaki server.js use kar sake
module.exports = Movie;