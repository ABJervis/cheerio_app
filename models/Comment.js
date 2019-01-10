var mongoose = require("mongoose");

//reference to the Schema constructor
var Schema = mongoose.Schema;

//using the constructor, create a new NoteSchema object

var CommentSchema = new Schema({
    title: String, 
    body: String
});

//create the model
var Comment = mongoose.model("Comment", CommentSchema);

//export the model
module.exports = Comment;