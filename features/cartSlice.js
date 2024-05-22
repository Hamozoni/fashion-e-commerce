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

            if(item) item.q++;
            else state.cartItems.product.push({product: action.payload,q: 1})
            
            
        },
        decrement: (state,action)=> {
            const item = state.cartItems.find(el=> el.product.id === action.payload.id);
            if(item){
                item.q--
                if(item.q === 0){
                    state.cartItems = state.cartItems.filter(e=> e.product.id !== action.payload.id)
                }
            }
        }
        
    }
});

export const {increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;