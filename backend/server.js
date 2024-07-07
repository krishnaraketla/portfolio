require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

// Routes

mongoose.connect(process.env.MONGO_URI_PORTFOLIO)
    .then( async() => {
        console.log("db connected!");
        app.listen(process.env.PORT || 4000, () => { 
            console.log("Listening on port " + (process.env.PORT || 4000));
        });
    })
    .catch((error) => {
        console.log(error);
    });
