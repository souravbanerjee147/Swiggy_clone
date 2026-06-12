// Restaurent.Model.js


import mongoose from "mongoose";


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
        type: String,
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



export default RestaurentModel;
