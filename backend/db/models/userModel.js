const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/socialMedia");

var userSchema = new Schema({
    fullName                        : { type: String, required: true},
    username                        : { type: String, required: true,unique: true},
    password                        : { type: String},
    email                           : { type: String},
    accountType                     : { type: String, default:"public"}
},{timestamps:true})

const userModel=mongoose.model("users", userSchema);
module.exports=userModel;