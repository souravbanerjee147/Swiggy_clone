// // cart.jsx


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, removeItemEntire, clearCart } from './utils/cartslice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // Calculate dynamic pricing metrics
    const itemsTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = itemsTotal > 0 ? 40 : 0;
    const platformFee = itemsTotal > 0 ? 5 : 0;
    const grandTotal = itemsTotal + deliveryFee + platformFee;

    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to empty your cart?")) {
            dispatch(clearCart());
        }
    };

    // EMPTY CART STATE VIEW
    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center select-none animate-in fade-in duration-300">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300 border border-gray-100 shadow-xs">
                    <i className="bi bi-cart-x text-4xl"></i>
                </div>
                <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Your cart is empty</h2>
                <p className="text-sm text-gray-400 mt-1 max-w-xs">Good food is always cooking! Go ahead and add some delicious items to your basket.</p>
                <Link to="/" className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold py-2.5 px-6 rounded-xl shadow-xs transition active:scale-95">
                    Browse Restaurants
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8 select-none animate-in fade-in duration-200">
            
            {/* CART HEADER ROW */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Items in Cart</h1>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">({cartItems.length} custom choices selected)</p>
                </div>
                <button 
                    onClick={handleClearCart}
                    className="text-xs sm:text-sm font-bold text-red-500 hover:bg-red-50 py-2 px-3.5 rounded-lg border border-red-100 shadow-xs transition active:scale-95 cursor-pointer"
                >
                    <i className="bi bi-trash3 mr-1.5"></i>Clear Cart
                </button>
            </div>

            {/* TWO-COLUMN LAYOUT CONTEXT WRAPPER */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                
                {/* LEFT SIDE: SELECTION LIST (Takes 2 columns on large screens) */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => {
                        // FIXED: Ensuring a secure, robust unique identification string fallback matching MongoDB _id metrics
                        const targetKey = item._id || item.id;

                        return (
                            <div 
                                key={targetKey} // FIXED: Clears the unique 'key' console error prop completely
                                className="flex items-center justify-between p-3 sm:p-4 bg-white border border-gray-100 rounded-xl shadow-xs gap-3 sm:gap-4 relative group"
                            >
                                {/* Item Image Container */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-gray-50 shadow-xs shrink-0 bg-gray-50">
                                    <img 
                                        src={item.imageId} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Metadata Content Grid info */}
                                <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight truncate">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                                        {item.category || "PIZZA MANIA"}
                                    </p>
                                    <p className="text-xs sm:text-sm font-extrabold text-gray-900">
                                        ₹{item.price} <span className="text-gray-400 font-medium text-xs">x {item.quantity}</span>
                                    </p>
                                </div>

                                {/* Interactive Modifiers Control Cluster Column */}
                                <div className="flex flex-col items-end justify-between gap-3 h-full shrink-0">
                                    {/* Remove Entire Line Button */}
                                    <button 
                                        onClick={() => dispatch(removeItemEntire(item))}
                                        className="text-gray-300 hover:text-red-500 transition cursor-pointer text-sm sm:text-base p-1"
                                        title="Remove completely"
                                    >
                                        <i className="bi bi-x-circle-fill"></i>
                                    </button>

                                    {/* Precise Quantity Increment Toggles Counter */}
                                    <div className="flex items-center justify-between border border-green-200 rounded-lg bg-green-50/40 shadow-xs h-7 sm:h-8 w-20 sm:w-24 overflow-hidden">
                                        <button 
                                            onClick={() => dispatch(removeItem(item))}
                                            className="px-2 h-full text-red-500 hover:bg-red-50 font-bold transition text-xs sm:text-sm cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="font-extrabold text-green-700 text-xs sm:text-sm">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => dispatch(addItem(item))}
                                            className="px-2 h-full text-green-600 hover:bg-green-50 font-bold transition text-xs sm:text-sm cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

							</div>
						);
					})}
				</div>

				{/* RIGHT SIDE: PRICING BREAKDOWN BILL SUMMARY CARD (Takes 1 column) */}
				<div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-xs lg:sticky lg:top-24 space-y-4">
					<h2 className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight pb-3 border-b border-gray-50">
						Bill Details
					</h2>

					<div className="space-y-2.5 text-sm font-medium text-gray-600">
						<div className="flex justify-between">
							<span>Item Total</span>
							<span className="font-bold text-gray-900">₹{itemsTotal}</span>
						</div>
						<div className="flex justify-between">
							<span>Delivery Partner Fee</span>
							<span className="text-green-600 font-bold">₹{deliveryFee}</span>
						</div>
						<div className="flex justify-between">
							<span>Platform Fee</span>
							<span className="text-gray-900">₹{platformFee}</span>
						</div>
					</div>

					<hr className="border-gray-100 my-2" />

					<div className="flex justify-between items-center text-gray-900 font-extrabold text-base sm:text-lg tracking-tight">
						<span>To Pay</span>
						<span className="text-indigo-600">₹{grandTotal}</span>
					</div>

					<button 
						onClick={() => alert("Order placed successfully! Dev mode checkout sequence complete.")}
						className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-xl shadow-xs transition active:scale-95 text-center text-sm cursor-pointer transform tracking-wide uppercase"
					>
						Proceed to Checkout
					</button>
				</div>

			</div>
		</div>
	);
};

export default Cart;