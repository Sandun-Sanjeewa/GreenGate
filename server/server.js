import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";


const envFile =
  process.env.NODE_ENV === "production"
    ? "../.env.prod"
    : "../.env.dev";
    
dotenv.config({ path: "../.env.base", override: true });
dotenv.config({ path: envFile, override: true });

console.log(`Loaded environment file: ${envFile}`);
console.log("Loaded env files:");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.send("API running");
});  

const PORT = process.env.PORT || 5000;
app.listen(PORT,"0.0.0.0",()=>{
    //console.log("Dynamic code updated at", new Date());
    console.log("TEST BIND MOUNT");
    console.log(`Server is running on ${process.env.NODE_ENV}  mode on port ${PORT}`);
});