import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import './dbConfig.js';
import { Router } from "./route/routes.js";
dotenv.config();

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

//import port number from .env file
const port = process.env.PORT || 7000;

app.listen(port, ()=>{
    console.log(`Running the server port at http://localhost:${port}`);
})

app.use("/api", Router);
