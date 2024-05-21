import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems :[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state,action)=> {

            const item = state.cartItems.find(el=> el.product.id === action.payload.id);

            if(item) q++
            
        }
        
    }
})