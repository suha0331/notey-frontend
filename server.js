const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
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
// app.use("/api", apiRoute);


// Database
// var databaseUri = 'mongodb://localhost/noteyDb';
// if(process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(databaseUri);
// }
// var db = mongoose.connection;
// --------------------------------------------------------

// const express = require('express');
var router = express.Router();
var moment = require('moment');
var now = moment();
// console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"))
var path = require('path');

// Import the User and Note models
var User = require('./server/models/user.js');
var Note = require('./server/models/notes.js');

	// Add a Note Route - **API**
app.post('/notes/save/:id', function (req, res){

  // Collect User ID
  var userID = req.body.id
  
  // Collect Header Name
  var header = req.body.header;

  // Collect Note Content
  var noteContent = req.body.body;

  // Collect Date
  var date = now.format("dddd, MMMM Do YYYY, h:mm:ss a")
console.log(header)
console.log(noteContent)

//     	db.users.findOneAndUpdate({_id: ObjectId("5a759be622cf9297b7e98736")}, {$push: {"notes": { header: req.body.header, 
// body: req.body.body, 
// date: Date()}
// }})
      // Push the new Note to the list of notes in the User's info
      User.findOneAndUpdate({'_id': userID}, 
      {$push: {"notes": 
      { header: header, 
  		body: noteContent,
  		date: date
 		 }}})
      // execute the above query
      .exec(function(err, doc){
        // log any errors
        if (err){
          console.log(err);
        } else {
          // Send Success Header
          res.sendStatus(200);
        }
      });
    }
  );


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
