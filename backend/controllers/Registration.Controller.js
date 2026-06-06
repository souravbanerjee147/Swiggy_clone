// Registration.Controller.js

import bcrypt from "bcrypt"; 
import Registration from "../model/Registration.Model.js";
// import { data } from "react-router-dom";
import jwt from "jsonwebtoken";

// Registration Create Controller
export async function createControler(req, res) {

    try {
        const { name, email, password } = req.body;
        let existingUser = await Registration.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ "message": "User already exists with this email" });
        }
        else {
            const newUser = await Registration.create({ name, email, password: bcrypt.hashSync(password, 10) });
            // await newUser.save();
            return res.status(201).json({ "message": "User registered successfully" });
        }


    }
    catch (error) {
        return res.status(400).json({ "error": error.message });
    }
}

// get controller
export async function getControler(req, res) {
    try {
        const {email, password} = req.body;
        const data = await Registration.findOne({ email });

        if (!data) {
            return res.status(400).json({ "message": "User not found with this email" });
        }
        
        let passwordMatch = bcrypt.compareSync(password, data.password)
        if (!passwordMatch) {
            return res.status(400).json({ "message": "Incorrect password or email" });
        }
        // token generate
        const token = jwt.sign({id: data._id, name: data.name}, 'SIGNIN');
        return res.status(200).json({
            user :{
                name :data.name,
                email : data.email  
            }, 
            accessToken : token
        })
    }
    catch (error) {
        return res.status(400).json({ "error": error.message });
    }
}
