// restaurent.Route.js


// db.route.js
import {creatController, getController, updateController, deleteController} from '../controllers/Restaurent.Controller.js'
import verifyToken from '../middleware/verifyToken.js';


export default function RestaurentRoute(app) {
  
                            

        // Create
        app.post('/api/restaurant', creatController)

        // Read
        // app.get('/api/Restaurant', verifyToken, getController)
        app.get('/api/restaurant', getController)
        
        // Update
        app.patch('/api/restaurant/:id', updateController)           

        // Delete
        app.delete('/api/restaurant/:id', deleteController)

}
