"use client"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store,persistor } from "../store/store";

function ReduxProvider({children}) {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
       {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider;
