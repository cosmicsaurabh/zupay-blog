const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(express.json())

const user = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

app.use("/api/v1", user);
app.use(cors());


app.use("/api/auth", userRouter);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



module.exports = app