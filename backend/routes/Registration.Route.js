// Registration.Route.js
import {createControler, getControler} from '../controllers/Registration.Controller.js';
import verifyToken from '../middleware/verifyToken.js';


export default function RegistrationRoute(app) {

        // Create
        app.post('/api/register', createControler)

        // Read
        app.post('/api/login', getControler)
        
        // Update
        // app.patch('/api/database/:id', updateControler)           

        // Delete
        // app.delete('/api/database/:id', deleteControler)
}
