const express = require("express");
const cors = require("cors"); 

const app = express();

app.use(express.json())

const user = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

app.use("/api/v1", user);

app.use("/api/auth", userRouter);

const corsOptions ={
      origin:'http://localhost:3000', 
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200
  }
app.use(cors(corsOptions));

module.exports = app