// Registration.Model.js

import mongoose from "mongoose";

// schema
const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Model
const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;

