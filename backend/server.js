const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({path:"./config/config.env"})

const connectDb = require("./config/database")

const port = process.env.PORT || 4000;

connectDb();

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})