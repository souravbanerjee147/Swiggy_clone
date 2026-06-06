// Restaurent.Controller.js
import RestaurentModel from '../model/Restaurent.Model.js'

// Create
export async function creatController(req, res){

    // all the data are destructured to the req.body, then we can use it to create a new document in the database using the model and then we can send a response back to the client.
    try{
        const {name, cloudinaryImageId, avgRatingString, slaString, cuisines, locality} = req.body;

        const newData = await RestaurentModel.create({name, cloudinaryImageId, avgRatingString, slaString, cuisines, locality});
        return res.status(201).json({" New Data Created ": newData});
    } 
    catch (error) {
        return res.status(400).json({" error ": error.message});
    }
}

// Read
export async function getController(req, res){
    try{
        const data = await RestaurentModel.find({});
         if(!data){
            return res.status(404).json({'Massage': "No data found"})
         }
         return res.status(200).json({"Massage" : "Data Fetched Successfully", "data": data})
    }
    catch (error) {
        // return res.status(400).json({" error ": error.message});
        return res.status(400).json({" error ": error.message});
    }
}

// Update
export async function updateController(req, res){
    try{
        const id = req.params.id;
        let updatedData = await RestaurentModel.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedData){
            return res.status(404).json({'Massage': "No data found to update"})
        }
        return res.status(200).json({"Massage" : "Data Updated Successfully", "data": updatedData})
    }
    catch (error) {
        return res.status(400).json({" error ": error.message});
    }
}

// Delete
export async function deleteController(req, res){
    try{
        const id = req.params.id;
        let deletedData = await RestaurentModel.findByIdAndDelete(id);
        if(!deletedData){
            return res.status(404).json({'Massage': "No data found to delete"})
        }
        return res.status(200).json({"Massage" : "Data Deleted Successfully", "data": deletedData})
    }
    catch (error) {
        return res.status(400).json({" error ": error.message});
    }
}   




