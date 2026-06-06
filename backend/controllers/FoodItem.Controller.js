// FoodItem.Controller.js

import FoodItem from "../model/FoodItem.Model.js";

// Create a new food item
export async function CreateFoodItem (req, res){
    try {
        const { name, price, category, imageId } = req.body;

        const newFoodItem = await FoodItem.create({
            name,
            price,
            category,
            imageId
        });

        return res.status(201).json({" New FoodItem Created ": newFoodItem});
    } catch (error) {
        return res.status(400).json({" error ": error.message});
    }
}

// Get all food items
export async function GetAllFoodItems (req, res){
    try {
        const foodItems = await FoodItem.find({});
        if (!foodItems) {
            return res.status(404).json({'Message': "No food items found"});
        }
        return res.status(200).json({"FoodItems": foodItems});
    } catch (error) {
        return res.status(400).json({" error ": error.message});
    }
}




