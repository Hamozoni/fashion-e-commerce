import { createSlice } from "@reduxjs/toolkit";

const likedListSlice = createSlice({
    name: 'lakedList',
    initialState: [],
    reducers: {
        toggleLikedList: (state,action)=> {

            const item = state?.find(e=> e.id === action.payload.id);
            if(!item) {
                state?.push(action.payload);
            }else {
                state.splice(state.indexOf(item),1);
            }
        },
        removeAllFromLikedList: (state,action)=> {
            if(action.payload === 'cleerAll') {
                state.splice(0,state?.length)
            }
        }
    }

});

export const {toggleLikedList,removeAllFromLikedList} = likedListSlice.actions;

export default likedListSlice.reducer;