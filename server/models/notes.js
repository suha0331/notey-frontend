// Require Mongoose + Moment
var mongoose = require('mongoose');
// Create a Schema Class
var Schema = mongoose.Schema;
// Moment Stuff
var moment = require('moment');
var now = moment();

// Create Comment Schema
var NoteSchema = new Schema({
	notes: { header: String}, 
	body: String, 
	date: Date 
})

// Create the User model with Mongoose
var Note = mongoose.model('Note', NoteSchema);

// Export the Model
module.exports = Note;
