var mongoose = require("mongoose");

//reference to the Schema constructor
var Schema = mongoose.Schema;

//using the contstructor, create a new UserSchema object

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String, 
        required: true
    }, 
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

//Create table, Article

var Article = mongoose.model("Article", ArticleSchema);

//export it

module.exports = Article;
