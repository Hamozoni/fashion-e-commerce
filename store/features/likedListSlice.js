import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    name: '',
    priceInCent: 0,
    imagePath:'',
    rating: 0,
    brand: ''
}

export const likedListSlice = createSlice({
    name: 'lakedList',
    initialState,
    reducers: {
        addToLikedList: (state,action)=> {
            state?.push(action.payload)
        },
        removeFromLikedList: (state,action)=> {
            state?.filter(e=> e.id !== action.payload.id)
        },
        removeAllFromLikedList: (state)=> {
            state = {}
        },
    }

});


export const {addToLikedList,removeFromLikedList,removeAllFromLikedList} = likedListSlice.actions;

export default likedListSlice.reducer;