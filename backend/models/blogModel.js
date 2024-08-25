const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "please enter Title"]
    },
    published : {
        type:String,
    },
    contents:{
        type:Array,
        default:[]
    },
    readTime:{
        type:Number,
        required:[true, "please enter Read Time"]
    },  
    conclusion:{
        type:String,
    },
    comments:{
      type:Array
    }
})

module.exports = mongoose.model("Blog", blogSchema);