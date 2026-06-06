// Restaurent.Model.js


import mongoose from "mongoose";
// import { bool } from "prop-types";

const RestaurentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cloudinaryImageId: {
        type: String,
        required: true,
    },
    avgRatingString: {
        type: String,
        required: true
    },
    slaString:{
        type: String,//Shorthand (Shortcurt)
        required: true
    },
    cuisines: {
        type: [String], 
        required: true
    },
    locality: {
        type: String,
        required: true
    }
});

const RestaurentModel = mongoose.model('Restaurent', RestaurentSchema);
// vs code name   =         (collection Name,  schema name)


export default RestaurentModel;