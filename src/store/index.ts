import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer, { rollbackAfterDelete} from "./inventory/slice";

import { Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { ProductWithId } from "../utils/types";

const perisistanceLocalStorageMiddelware: Middleware = (store) => (next) => (action) => {
    console.log("Current State: ", store.getState());
    console.log("Action: ", action);
    next(action);
    localStorage.setItem("_redux_state_", JSON.stringify(store.getState()));
    console.log("New State: ", store.getState());
}

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
    const { type, payload } = action;

    console.log({ type, payload });
    const previousState = store.getState();
    next(action);

    if (type === "inventory/deleteProductById") {
        
        const product = previousState.inventory.find((product: ProductWithId) => product.id === payload);
        console.log("Product", product);

        fetch(`https://jsonplaceholder.typicode.com/post/${payload}`, {
            method: "DELETE", 
        }).then(response => {
            if (response.ok) {
                toast.success("Product deleted successfully");
            } else {
                throw new Error(`Request Failed deleting the product ${payload} from database`);
            }
        }).catch(error => {
            toast.error(`Failed to delete the product ${payload} from database`);
            console.log(error);
            if (product) store.dispatch(rollbackAfterDelete(product));
        });
    }
}

export const store = configureStore({
    reducer: {
        inventory: inventoryReducer
    },
    middleware: (getDefaultMiddleware) => { return getDefaultMiddleware()
        .concat(perisistanceLocalStorageMiddelware, syncWithDatabase);} // The middleware will be executed in the order they are listed
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch