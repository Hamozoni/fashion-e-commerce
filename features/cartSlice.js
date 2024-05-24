import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products :[],
    totalQuantity : 0,
    deliveryFree : 0,
    totalPaid : 0
};

const getTotal = (state)=> {
    state.totalQuantity = state.products.reduce((total,curr)=> (total += curr.quantity),0);
    state.totalPaid = state.products.reduce((total,curr)=> (total += curr.priceInCent * curr.quantity),0);
    state.deliveryFree = state.totalPaid  > 14999 ? 0 : 1700;

    return state
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        incrementItemInCart: (state,action)=> {

            const item = state.products.find(el=> el.id === action.payload.id);

            if(item){ 
                item.quantity++

            } else {
                state.products.push({...action.payload,quantity: 1})
            }

            getTotal(state);
        },
        decrementItemInCart: (state,action)=> {
            const item = state.products.find(el=> el.id === action.payload);
            if(item){
                item.quantity--
                if(item.quantity === 0){
                    state.products = state.products.filter(e=> e.id !== action.payload)
                }
            }
            getTotal(state);
        },
        removeItemFromCart: (state,action)=> {
            state.products = state.products.filter(e=> e.id !== action.payload);
            getTotal(state);
        }
        
    }
});

export const {incrementItemInCart,decrementItemInCart,removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;