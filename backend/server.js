require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');

const app = express();

// Use CORS for development and production
const allowedOrigins = ['http://localhost:3000', 'https://floating-citadel-66452-32c90ba4ea6a.herokuapp.com'];
app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI_PORTFOLIO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("db connected!");
        app.listen(process.env.PORT || 4000, () => {
            console.log("Listening on port " + (process.env.PORT || 4000));
        });
    })
    .catch((error) => {
        console.log(error);
    });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Route to serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Define a simple route
app.get('/api', (req, res) => {
    // res.send('Hello, World!');
});