

// frontend/src/frontend/components/utils/cartslice.jsx
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Match using BOTH MongoDB _id and flat fallback id strings safely
            const targetId = action.payload._id || action.payload.id;
            const existingItem = state.items.find(
                (item) => (item._id || item.id) === targetId
            );

            if (existingItem) {
                // If it already exists, increment its specific quantity indicator
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                // If it's a brand new item, append a quantity property and push it to the state array
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const targetId = action.payload._id || action.payload.id;
            const existingItem = state.items.find(
                (item) => (item._id || item.id) === targetId
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    // Safe reference filtering
                    state.items = state.items.filter(
                        (item) => (item._id || item.id) !== targetId
                    );
                }
            }
        },
        removeItemEntire: (state, action) => {
            const targetId = action.payload._id || action.payload.id;
            state.items = state.items.filter(
                (item) => (item._id || item.id) !== targetId
            );
        },
        clearCart: (state) => {
            // Bulletproof way to empty an array state slice in Redux Toolkit safely
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart, removeItemEntire } = cartSlice.actions;
export default cartSlice.reducer;
