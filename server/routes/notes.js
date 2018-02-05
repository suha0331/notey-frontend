// const express = require('express');
// var moment = require('moment');
// var now = moment();
// // console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"))
// var path = require('path');

// const router = new express.Router();


// // Import the User and Note models
// var User = require('../models/user.js');
// // var Note = require('./server/models/notes.js');

// 	// Add a Note Route - **API**
// router.post('/notes/save/:id', function (req, res){

//   // Collect User ID
//   // var userID = mongoose.Types.ObjectId(req.params.id.toString())
  
//   // Collect Header Name
//   var header = req.body.header;

//   // Collect Note Content
//   var noteContent = req.body.body;

//   // Collect Date
// var date = now.format("dddd, MMMM Do YYYY, h:mm:ss a")
// console.log(header)
// console.log(noteContent)

// //db.users.findOneAndUpdate({_id: ObjectId("5a759be622cf9297b7e98736")}, {$push: {"notes": { header: req.body.header, 
// // body: req.body.body, 
// // date: Date()}
// // }})
//       // Push the new Note to the list of notes in the User's info
//       User.findOneAndUpdate({'_id': req.params.id}, 
//       {$push: {"notes": 
//       { header: header, 
//   		body: noteContent,
//   		date: date
//  		 }}})
//       // execute the above query
//       .exec(function(err, doc){
//         // log any errors
//         if (err){
//           console.log(err);
//         } else {
//           // Send Success Header
//           res.sendStatus(200);
//         }
//       });
//     }
//   );

// module.exports = router;
