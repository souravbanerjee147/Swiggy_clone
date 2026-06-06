// verifyToken.js
// import RestaurentModel from "../model/Restaurent.Model.js";
import Registration from "../model/Registration.Model.js";


import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
    // const authHeader = req.headers.authorization;
    if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT")
    {
        jwt.verify(req.headers.authorization.split(" ")[1], 'SIGNIN', (err, VerifyTocken) => {
            if (err){
                return res.status(401).json({ "message": "Unauthorized" });
            }
            //  console.log("VerifyTocken", VerifyTocken); // bar
            //  next();
            return Registration.findById(VerifyTocken.id)
            .then((user) => {
                console.log("user", user); // bar
                if (!user) {
                    return res.status(401).json({ "message": "Unauthorized" });
                }
                req.user = user;
                next();
            })
            .catch((err) => {
                return res.status(401).json({ "message": "Unauthorized" });         
            });
        });
    }

    else{
        return res.status(401).json({ "message": "Token Not found" });
    }
    

}