import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import './config/dbConfig.js';
import { Router } from "./route/";

dotenv.config({path:'./config/.env'})

const app = express();
app.use(express.json());
app.use(cors());
//import port number from .env file
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Running the server port at http://localhost:${port}`);
})

app.use("/api", Router);
