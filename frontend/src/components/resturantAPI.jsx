// // resturantAPI.jsx



import { useEffect, useState } from 'react';
import axios from 'axios';

const resturantAPI = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function calling() {
            try {
                // fetches the clean, full list of restaurants for your home screen.
                let result = await axios.get('http://localhost:8080/api/restaurant');
                
                // Unpack result.data.data because backend wraps the array inside an object
                if (result.data && result.data.data) {
                    console.log("Successfully fetched full restaurant array:", result.data.data);
                    setRestaurants(result.data.data); 
                }
            } catch (error) {
                console.error("Error fetching restaurants from backend:", error);
            }
        }
        calling();
    }, []);

    return restaurants;
};

export default resturantAPI;
