import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems :[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementItemInCart: (state,action)=> {

            const item = state.cartItems.find(el=> el.product.id === action.payload.id);

            if(item){ 
                item.quantity++
            } else {
                state.cartItems.push({product: action.payload,quantity: 1})
            }
            
            
        },
        decrementItemInCart: (state,action)=> {
            const item = state.cartItems.find(el=> el.product.id === action.payload.id);
            if(item){
                item.quantity--
                if(item.quantity === 0){
                    state.cartItems = state.cartItems.filter(e=> e.product.id !== action.payload.id)
                }
            }
        },
        removeItemFromCart: (state,action)=> {
            state.cartItems = state.cartItems.filter(e=> e.product.id !== action.payload.id)
        }
        
    }
});

export const {incrementItemInCart,decrementItemInCart,removeItemFromCart} = cartSlice.actions;

const cartItems = (state)=> state.cart.cartItems

export const totalCartItemsQSelector = createSelector([cartItems],(cartItems)=> {
    cartItems.reduce((total,curr)=> total += curr.product.quantity,0)
});

export const totalPriceSelector = createSelector([cartItems],(cartItems)=> {
    cartItems.reduce((total,current)=> total += current.priceInCent * current.quantity,0)
});

export const productQuantitySelector = createSelector([cartItems,(cartItems,productId)=> productId],
(cartItems,productId)=> cartItems.find(e=> e.product.id === productId)?.quantity
)

export default cartSlice.reducer;