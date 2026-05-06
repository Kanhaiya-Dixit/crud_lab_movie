const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    genre: String,
    releaseYear: Number,
    rating: { type: Number, min: 0, max: 10 },
    duration: Number,
    language: { type: String, default: 'English' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', movieSchema);