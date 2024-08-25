const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(express.json())

const user = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

app.use("/api/v1", user);

app.use("/api/auth", userRouter);

// const corsOptions ={
  //       origin:'http://localhost:3000', 
  //       credentials:true,            //access-control-allow-credentials:true
  //       optionSuccessStatus:200
  //   }
  // app.use(cors(corsOptions));
  app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


module.exports = app