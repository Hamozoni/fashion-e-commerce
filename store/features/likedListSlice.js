import { createSlice } from "@reduxjs/toolkit";

export const likedListSlice = createSlice({
    name: 'lakedList',
    initialState: [],
    reducers: {
        addToLikedList: (state,action)=> {

            const item = state?.find(e=> e.id === action.payload.id);
            if(!item) {
                state?.push(action.payload);
            }

            console.log(state.lakedList)
        },
        removeFromLikedList: (state,action)=> {
            state?.filter(e=> e.id !== action.payload)
        },
        removeAllFromLikedList: (state)=> {
            state = {}
        }
    }

});

export const {addToLikedList,removeFromLikedList,removeAllFromLikedList} = likedListSlice.actions;

export default likedListSlice.reducer;