require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();

// Use CORS for your Heroku app
// Use CORS for development and production
const allowedOrigins = ['http://localhost:3000', 'https://floating-citadel-66452-32c90ba4ea6a.herokuapp.com'];
app.use(cors({ origin: allowedOrigins }));

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

mongoose.connect(process.env.MONGO_URI_PORTFOLIO)
    .then(() => {
        console.log("db connected!");
        app.listen(process.env.PORT || 4000, () => { 
            console.log("Listening on port " + (process.env.PORT || 4000));
        });
    })
    .catch((error) => {
        console.log(error);
    });