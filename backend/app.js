const express = require("express");
const cors = require("cors"); 

const app = express();
app.use(express.json())

const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");



app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use("/api/auth", userRouter);
// app.use("/api/v1", blogRouter);
app.use("/api/auth", userRouter);
app.use("/api/v1", blogRouter);


module.exports = app