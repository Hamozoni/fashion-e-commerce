import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from "./features/cartSlice";
import likedListSlice from "./features/likedListSlice"

const rootReducer = combineReducers({
    cart : cartSlice,
    lakedList: likedListSlice
});

export default rootReducer;