// FoodItem.Route.js
import { CreateFoodItem, GetAllFoodItems } from "../controllers/FoodItem.Controller.js";


export default function FoodItemRoute(app){
    app.post("/api/fooditem", CreateFoodItem);
    app.get("/api/fooditem", GetAllFoodItems);
}