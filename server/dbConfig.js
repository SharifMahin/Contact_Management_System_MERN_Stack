import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const uri = process.env.URI;

const connection = async () => {
    try{
        await mongoose.connect(uri);
        console.log("MongoDB Connection Successful");
    } catch(err){
    console.log(err);
        };
    }
connection(); // call the async function
export default connection;
