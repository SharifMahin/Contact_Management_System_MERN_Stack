import mongoose from "mongoose";

const connection = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/contactDB");
        console.log("MongoDB Connection Successful");
    } catch(err){
    console.log(err);
        };
    }
connection(); // call the async function
export default connection;
