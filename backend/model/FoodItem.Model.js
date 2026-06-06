// FoodItem.Model.js

import mongoose from "mongoose";

// schema
const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageId : {
        type: String,
        required: true
    }
});

// Model
const FoodItem = mongoose.model("FoodItem", foodItemSchema);
export default FoodItem;