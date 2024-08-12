import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    products :[],
    totalQuantity : 0,
    deliveryFree : 0,
    totalPaid : 0
};

const getTotal = (state)=> {

    state.totalQuantity = state.products.reduce((total,curr)=> (total += curr.quantity),0);
    state.totalPaid = state.products.reduce((total,curr)=> (total += (curr.offerPriceInHalala || curr.priceInHalala ) * curr.quantity),0);
    state.deliveryFree = state.totalPaid  > 14999 ? 0 : 1700;

    return state;
};

const findItem = (state,action)=> {

    const {id,color,size} = action.payload;
    const item = state.products.find(el=> el.id === id && el.color === color && el.size === size);

    return item
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state,action)=> {
            state.products.push({...action.payload,quantity: 1});
            getTotal(state);
        },
        incrementItemInCart: (state,action)=> {

            const item = findItem(state,action);
            if(item){ 
                item.quantity++
            } 

            getTotal(state);
        },
        decrementItemInCart: (state,action)=> {

           const item = findItem(state,action);

            if(item){
                item.quantity--
                if(item.quantity === 0){
                    state.products.splice(state.products.indexOf(item),1)
                }
            }
            getTotal(state);
        },
        removeItemFromCart: (state,action)=> {
            const item = findItem(state,action)
            state.products.splice(state.products.indexOf(item),1)
            getTotal(state);
        },
        clearAllItemsFromCart : (state,action)=> {
            state?.products.splice(0,state?.products.length);
            getTotal(state);
        }
        
    }
});

export const {incrementItemInCart,decrementItemInCart,removeItemFromCart,addToCart,clearAllItemsFromCart} = cartSlice.actions;

export default cartSlice.reducer;