const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    creatorId:{
        type:String,
    },
    publishedDate : {
        type:String,
    },
    publishedTime : {
        type:String,
    },
    contents:{
        type:Array,
        default:[],
    },
    readTime:{
        type:Number,
    },  
    conclusion:{
        type:String,
    },
    comments:{
      type:Array
    }
})

module.exports = mongoose.model("Blog", blogSchema);