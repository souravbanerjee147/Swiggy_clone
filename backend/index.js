import cors from "cors";
import express from "express";
import RegistrationRoute from "./routes/Registration.Route.js";
import mongoose from "mongoose";
import RestaurentRoute from "./routes/restaurent.Route.js";
import FoodItemRoute from "./routes/FoodItem.Route.js";
// import Login from "./login.js";


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to swiggy backend in get method");
});

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
// });

mongoose.connect("mongodb+srv://souravayrah1_db_user:<password>@registertion.x9ifoqr.mongodb.net/")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});


    RegistrationRoute(app);
    RestaurentRoute(app);
    FoodItemRoute(app);


// export default function RegistrationRoute(app) {
//     app.post('/api/register', createController);
//     app.post('/api/login', getControler); // 
// }


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});





