const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const config = require('./config/index.json');
require('./server/models').connect(config.dbUri);
const authRoute = require("./server/routes/auth.js");
// const apiRoute = require("./server/routes/api.js");
var cors = require('cors')

const localSignup = require("./server/passport/local-signup.js");
const localLogin = require("./server/passport/local-login.js");


const PORT = process.env.PORT || 3001;
const app = express();


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets

// app.use(express.static("client/public"));

app.use(express.static("client/build"));

passport.use("local-signup", localSignup)
passport.use("local-login", localLogin)


// Add routes, both API and view
app.use("/auth", authRoute);
// app.use("/api", apiRoute);

app.use(cors())

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
app.post('/notes/save/:id', function(req, res) {
    // Collect Date
    var date = now.format("dddd, MMMM Do YYYY, h:mm:ss a")

    var newNote = new Note({
        header: req.body.header,
        body: req.body.body,
        date: date
    });

    newNote.save(function(error, note) {
        console.log("DOES THIS EVEN WORK")
        if (error) {
            res.send(error);
        } else {
            // Push the new Note to the list of notes in the User's info
            User.findOneAndUpdate({ "_id": req.params.id }, {
                    $push: {
                        "notes": newNote
                    }
                })
                // execute the above query
                .exec(function(err, doc) {
                    // log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // Send Success Header
                        res.sendStatus(200);
                    }
                });

        }
    })

});

// Get All Notes From Specific User

app.get("/notes/:id", function(req, res) {

    User.findOne({ '_id': req.params.id }, { "notes": [] }, function(error, found) {
        // Throw any errors to the console
        if (error) {
            console.log(error);
        }
        // If there are no errors, send the data to the browser as json
        else {
            console.log(found)
            res.json(found);
        }
    });
});

// Get Specific Note from specific user
app.delete("/notes/:userID/:id", function(req, res) {
    var userID = req.params.userID


    User.findOneAndUpdate({ "_id": mongoose.Types.ObjectId(userID.toString()) }, { $pull: { "notes": {"_id" : mongoose.Types.ObjectId(req.params.id.toString())} } }  
        , function(err) {
            if (err) {
                res.send(err);
            } else { res.send(User) }

        })})

    // User.findOne({'_id': req.params.id}, {"notes": [] }, function(error, found) {
    //     // Throw any errors to the console
    //     if (error) {
    //         console.log(error);
    //     }
    //     // If there are no errors, send the data to the browser as json
    //     else {
    //         console.log(found)
    //         res.json(found);
    //     }
    // });


// // Get Specific Note from specific user
// app.delete("/notes/:id", function(req, res) {
// // var userID = req.params.userID

// Note.findByIdAndRemove(req.params.id), function(err) {
//         if (error) {
//             res.send(error);
//         } else { res.send(post) }
//     }

// })

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});