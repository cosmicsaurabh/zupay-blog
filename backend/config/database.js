const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(
        (data) => {
            // console.log(`MongoDb connected with server : ${data.connection.host}`);
        }).catch((err)=>{
            // console.log("in config db ....mongoose connect nhi ho rha")
            console.log(err)
        })
}

module.exports = connectDb