import express from "express";
import dotenv from "dotenv"
import apiRoutes from "./routes/index.js"
import connectDB from "./db/connectDB.js";

const app = express();

// so that env varibale get loaded into environment variable asap as app starts.
dotenv.config();





app.use("/api", apiRoutes)

app.listen(process.env.PORT, (req, res)=>{
    // res.send("App is listening from port" + port)
    console.log("App is listening from port " + process.env.PORT)
});



