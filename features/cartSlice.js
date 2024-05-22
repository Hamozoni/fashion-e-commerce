import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems :[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state,action)=> {

            const item = state.cartItems.find(el=> el.product.id === action.payload.id);

            if(item) item.quantity++;
            else state.cartItems.product.push({product: action.payload,quantity: 1})
            
            
        },
        decrement: (state,action)=> {
            const item = state.cartItems.find(el=> el.product.id === action.payload.id);
            if(item){
                item.quantity--
                if(item.quantity === 0){
                    state.cartItems = state.cartItems.filter(e=> e.product.id !== action.payload.id)
                }
            }
        }
        
    }
});

export const {increment,decrement} = cartSlice.actions;

const cartItems = (state)=> state.cart.cartItems

export const totalCartItemsQSelector = createSelector([cartItems],(cartItems)=> {
    cartItems.reduce((total,current)=> total += current.quantity,0)
});

export const totalPriceSelector = createSelector([cartItems],(cartItems)=> {
    cartItems.reduce((total,current)=> total += current.priceInCent * current.quantity,0)
});

export const productQuantitySelector = createSelector()

export default cartSlice.reducer;