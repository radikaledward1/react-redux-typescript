import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory/slice";

import { Middleware } from "@reduxjs/toolkit";

const perisistanceLocalStorageMiddelware: Middleware = (store) => (next) => (action) => {
    console.log("Current State: ", store.getState());
    console.log("Action: ", action);
    next(action);
    localStorage.setItem("_redux_state_", JSON.stringify(store.getState()));
    console.log("New State: ", store.getState());
}

export const store = configureStore({
    reducer: {
        inventory: inventoryReducer
    },
    middleware: (getDefaultMiddleware) => { return getDefaultMiddleware().concat(perisistanceLocalStorageMiddelware);}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch