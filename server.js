const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection (Replace with your URI)
mongoose.connect('mongodb+srv://kanhaiyadixit01:<db_password>@cluster0.iay2qbv.mongodb.net/?appName=Cluster0')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use('/api/movies', movieRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));