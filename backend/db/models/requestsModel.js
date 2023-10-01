const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/socialMedia");

var requestSchema = new Schema({
    from                           : { type:String,   },
    to                             : { type: String,  },
    status                         : { type: String,   default:"waiting"}
},{timestamps:true})

const requestModel=mongoose.model("requests", requestSchema);
module.exports=requestModel;