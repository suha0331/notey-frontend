const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require('./config/index.json');
require('./server/models').connect(config.dbUri);

const authRoute = require("./server/routes/auth.js");
const apiRoute = require("./server/routes/api.js");

const localSignup = require("./server/passport/local-signup.js");
const localLogin = require("./server/passport/local-login.js");

var stormpath = require('express-stormpath');


const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

passport.use("local-signup", localSignup)
passport.use("local-login", localLogin)

// Add routes, both API and view
app.use("/auth", authRoute);
app.use("/api", apiRoute);



// Database
// var databaseUri = 'mongodb://localhost/noteyDb';
// if(process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(databaseUri);
// }
// var db = mongoose.connection;
// --------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
