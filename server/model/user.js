import mongoose from "mongoose";

// Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique:true
    },
    lName: {
        type:String,
        required: true,
        unique:true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique:true
    },
});

//create model
const userModel = new mongoose.model("user",userSchema);

export { userModel };

