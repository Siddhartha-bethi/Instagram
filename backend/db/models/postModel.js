const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/socialMedia");

var postSchema = new Schema({
    image                           : { type:String},
    username                        : { type: String, required: true},
    caption                         : { type: String,default:"Random Though"}
},{timestamps:true})

const postModel=mongoose.model("posts", postSchema);
module.exports=postModel;