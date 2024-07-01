import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {cartSlice }from "./features/cartSlice";
import {likedListSlice} from "./features/likedListSlice"


export const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
            likedList: likedListSlice.reducer
        }
    }
);

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;