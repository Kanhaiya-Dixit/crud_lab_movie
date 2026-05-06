const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// 1. Fetch all movies (GET)
router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// 2. Add a new movie (POST)
router.post('/', async (req, res) => {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
});

// 3. Get one movie by ID (GET)
router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
});

// 4. Update movie (PUT)
router.put('/:id', async (req, res) => {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMovie);
});

// 5. Delete a movie (DELETE)[cite: 1]
router.delete('/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
});

module.exports = router;