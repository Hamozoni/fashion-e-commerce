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

        addToCart : (state,action)=> {
            state.products.push({...action.payload,quantity: 1});
            getTotal(state);
        },
        incrementItemInCart: (state,action)=> {

            const {id,selectedColor,selectedSize} = action.payload;

            const item = state.products.find(el=> el.id === id && el.selectedColor === selectedColor && el.selectedSize === selectedSize);
            if(item){ 
                item.quantity++
            } 

            getTotal(state);
        },
        decrementItemInCart: (state,action)=> {
            const {id,selectedColor,selectedSize} = action.payload;
            const item = state.products.find(el=> el.id === id && el.selectedColor === selectedColor && el.selectedSize === selectedSize);
            if(item){
                item.quantity--
                if(item.quantity === 0){
                    state.products = state.products.filter(el=> el.id !== id && el.selectedColor !== selectedColor && el.selectedSize !== selectedSize)
                }
            }
            getTotal(state);
        },
        removeItemFromCart: (state,action)=> {
            const {id,selectedColor,selectedSize} = action.payload;
            state.products = state.products.filter(el=> el.id !== id && el.selectedColor !== selectedColor && el.selectedSize !== selectedSize);
            getTotal(state);
        }
        
    }
});

export const {incrementItemInCart,decrementItemInCart,removeItemFromCart,addToCart} = cartSlice.actions;

export default cartSlice.reducer;