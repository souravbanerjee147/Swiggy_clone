// resturantDetailAPI.jsx

import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addItem, removeItem } from "./utils/cartslice";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import { AuthContext } from './auth/AuthContext';
import AuthModal from './auth/AuthModal'; // ◄ Imported our new AuthModal

function ResturantDetailAPI() {
    const { token } = useContext(AuthContext)
    const navigate = useNavigate()
    let { id } = useParams();
    const [menu, setMenue] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // ◄ State to control the visibility of the AuthModal

    const cartItems = useSelector((store) => store.cart.items);

//---------------------------------------------- MockAPI ------------------------------------------------
    // const API = `https://69e3d440cfa9394db8d9dc70.mockapi.io/swiggy/restaurants/restaurants_detail`

    // useEffect(() => {
    //     async function calling() {
    //         try {
    //             // const proxy = "https://api.allorigins.win/get?url="
    //             // const API= ``
    //             // const resp=await axios.get(proxy + encodeURIComponent(API));
    //             // const json = JSON.parse(resp.data.contents);

    //             const resp = await axios.get(API);

    //             console.log(resp);
    //             setMenue(resp.data);
    //             // console.log(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    //             // setMenue(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    //         } catch (error) {
    //             console.error("Error fetching restaurant details:", error);
    //         }
    //     }

    //     if (id) calling();
    // }, [id])




    // ---------------------------------------------- Local My Restful API ------------------------------------------------

    const API = `http://localhost:8080/api/fooditem`;
    useEffect(() => {
        async function fetchMenu() {
            try {
                const menuRes = await axios.get(API);
                console.log(menuRes.data.FoodItems);
                setMenue(menuRes.data.FoodItems);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }

        if (id) fetchMenu();
    }, [id]);


    


    const dispatch = useDispatch();

    // --------------------- Update handleAddItem function block to reject modifications if token is null ----------------------
    const handleAddItem = (foodItem) => {
        if (!token) {
            setIsModalOpen(true)
            alert("Access Denied: Please sign in to your account first to add items to your cart basket!");
            return;
        }
        dispatch(addItem(foodItem));
    };

    // ----------------------- Updated rendering code to include AuthModal and handle cart integration with auth check ----------------------

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* ... Your Existing Menu Layout Header ... */}
            
            {/* ================= RE-ENGINEERED BUTTON INTERFACE CLICK BINDINGS ================= */}
            {menu.map((foodItem) => {
                const id = foodItem._id; // Assuming each food item has a unique 'id' property
                // console.log("Rendering food item with ID:", id);
                const itemInCart = cartItems.find((item) => {
                    const cartItemId = item._id || item.id;
                    const menuItemId = foodItem._id || foodItem.id;
                    return cartItemId === menuItemId;
                });

                return (
                    <div key={foodItem._id} className="flex justify-between border-b p-4 mb-10">
                        <div>
                            <h1 className="font-bold">{foodItem.name}</h1>
                            <h1>₹{foodItem.price}</h1>
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            <img src={foodItem.imageId} className="w-32 h-24 rounded-md object-cover shadow-xs" alt="" />

                            {itemInCart ? (
                                <div className="flex items-center mt-2 border rounded bg-white shadow-xs">
                                    <button onClick={() => dispatch(removeItem(foodItem))} className="px-3 py-1 text-red-500 font-bold">-</button>
                                    <span className="px-4 py-1 font-bold text-green-700">{itemInCart.quantity}</span>
                                    <button onClick={() => handleAddItem(foodItem)} className="px-3 py-1 text-green-600 font-bold">+</button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleAddItem(foodItem)} // ◄ Hooks directly into our safe controller block
                                    className="mt-2 bg-green-300 px-8 py-2 rounded-lg font-bold border hover:bg-green-400 transition"
                                >
                                    Add
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}

            {/* ================= CUSTOM AUTH TRIGGER PROMPT DIALOG ELEMENT ================= */}
            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)} // Simply dismisses the modal popup box view layer
                onConfirm={() => {
                    setIsModalOpen(false);
                    navigate("/Login"); // Dynamic routing loop pushes user to login panel mapping
                }}
            />
        </div>
    );
}
export default ResturantDetailAPI


