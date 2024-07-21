require("dotenv").config();
const express = require("express");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const cors = require("cors");
require("./passport");
// backend/server.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const app = express();

// Replace "http://localhost:3000" with your frontend URL
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow credentials to be sent
};

app.use(cors(corsOptions));

app.use(
    cookieSession({
        name: "session",
        keys: ["cyberwolve"],
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
