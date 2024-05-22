import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {cartSlice }from "../features/cartSlice";

export const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer
        }
    }
);

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;