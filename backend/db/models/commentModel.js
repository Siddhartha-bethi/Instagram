const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/socialMedia");

var commentSchema = new Schema({
    postid                           : { type:String},
    comments                         : { type :{
        username : {type: String},
        content  : {type: String},
        time     : {type: String},
    }}
})

const commentModel=mongoose.model("comments", commentSchema);
module.exports=commentModel;