const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import the User and Note models
const User = require('../models/user.js');
const Note = require('../models/notes.js');

var moment = require('moment');
var now = moment();
// console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"))
var path = require('path');

// GET notes
exports.list = router.get("/notes/:id", function(req, res) {

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

// CREATE notes
exports.create = router.post('/notes/save/:id', function(req, res) {
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

// DELETE notes
exports.delete = router.delete("/notes/:userID/:id", function(req, res) {
    var userID = req.params.userID

    User.findOneAndUpdate({ "_id": mongoose.Types.ObjectId(userID.toString()) }, { $pull: { "notes": { "_id": mongoose.Types.ObjectId(req.params.id.toString()) } } }, function(err) {
        if (err) {
            res.send(err);
        } else { res.send(User) }

    })
})

module.exports = router;