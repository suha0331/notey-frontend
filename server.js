const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const config = require('./config/index.js');
const authRoute = require("./server/routes/auth.js");
const noteRoute = require("./server/routes/notes.js");
var cors = require('cors')

// Database
// var databaseUri = 'mongodb://localhost/noteyDb';

const localSignup = require("./server/passport/local-signup.js");
const localLogin = require("./server/passport/local-login.js");
// const PORT = process.env.PORT || 3001;
const app = express();
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

passport.use("local-signup", localSignup)
passport.use("local-login", localLogin)

// Add routes, both API and view
app.use("/auth", authRoute);
app.use("/", noteRoute);

app.use(cors())

mongoose.connect(config.MONGO_URI, (err) => {
  if (err) throw err;
  console.log('Database successfully connected');
  app.listen(config.PORT, () => {
    console.log(`App listening on PORT ${config.PORT}`);
  });
});

