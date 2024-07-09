import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
// persist
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore(
    {
        reducer: persistedReducer
    }
);

export const persistor = persistStore(store);

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;