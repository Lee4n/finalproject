const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
 

// Define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser());

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
routes(app)


// Define API routes here Send every other request to the React app Define any
// API routes before this runs app.get("*", (req, res) => {
// res.sendFile(path.join(__dirname, "./client/build/index.html")); }); Connect
// to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/duty_stations";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Mongoose!");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
