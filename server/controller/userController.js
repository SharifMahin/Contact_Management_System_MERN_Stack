import bcrypt from "bcrypt";
import { userModel } from "../model/user.js";
//import express from "express"

import { validationResult } from "express-validator";

const Register = async (req,res) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(200).json({errors: errors.array()})
  } const {name,email,password} = req.body;
  {
    const userexist = await userModel.findOne({email})
    try{
    if(userexist){
      return res.status(400).json({errors: [{msg: "user exist"}],});
    }
    const hashpaas  = await bcrypt.hash(password,12)
    const newUser = new userModel({name,email,password: hashpaas})
    const result = await newUser.save();
    result._doc.password = undefined;
    return res.status(201).json({success:true,...result._doc})
  }catch(err){
    console.log(err)
    return res.status(500).json({error: err.message})

  }
  }
  console.log("register");
  return res.status(200).json("ok")
}

export { Register };

