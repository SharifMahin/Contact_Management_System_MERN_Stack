import express from "express";
import { body } from "express-validator";
import { Register } from "../controller/userController.js";

const router = express.Router();

router.post('/register',[body('name').trim().notEmpty().withMessage("Name Should not be Empty"),
                        body('email').trim().notEmpty().withMessage("Email Should not be Empty").isEmail().withMessage("Invalid Email!!!"),
                        body('password').trim().notEmpty().withMessage("password Should not be Empty").isLength({min:5, max: 30}).withMessage("password 5 to 30")
],Register);

export { router as Router };

