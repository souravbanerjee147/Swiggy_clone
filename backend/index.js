import cors from "cors";
import express from "express";
import RegistrationRoute from "./routes/Registration.Route.js";
import mongoose from "mongoose";
// import { applyMiddleware } from "redux"; //is only for front end
// import RestaurentRoute from "./routes/Restaurent.Route.js";
import RestaurentRoute from "./routes/restaurent.Route.js";
import FoodItemRoute from "./routes/FoodItem.Route.js";
// import Login from "./login.js";


const app = express();

app.use(cors());

app.use(express.json());
// app.use('/sam', (req, res, next) => {
//     res.send("Welcome to swiggy backend in sam method");
//     console.log("Middleware executed");
//     next();
// })
app.get("/", (req, res) => {
  res.send("Welcome to swiggy backend in get method");
});

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
// });

mongoose.connect("mongodb+srv://souravayrah1_db_user:j00x2XvQEeoxDVNh@registertion.x9ifoqr.mongodb.net/")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// previously
    RegistrationRoute(app);
    RestaurentRoute(app);
    FoodItemRoute(app);

// now
// export default function RegistrationRoute(app) {
//     app.post('/api/register', createController);
//     app.post('/api/login', getControler); // ◄ Ensure this line doesn't have an extra slash!
// }


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});



// Username :- souravayrah1_db_user
// Password :- j00x2XvQEeoxDVNh
// Connection id :- mongodb+srv://souravayrah1_db_user:j00x2XvQEeoxDVNh@registertion.x9ifoqr.mongodb.net/

