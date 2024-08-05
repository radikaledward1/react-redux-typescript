import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ProductId, Product, ProductWithId } from "../../utils/types";
import { DEFAULT_PRODUCTS_STATE } from "../../utils/constants";

let initialState = DEFAULT_PRODUCTS_STATE;
const persistedState = localStorage.getItem("_redux_state_");
if (persistedState) {
    initialState = JSON.parse(persistedState).inventory;
}

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: initialState,
    reducers: {
        deleteProductById: (state, action: PayloadAction<ProductId>) => {
            const id = action.payload;
            return state.filter((product) => product.id !== id);
        },
        AddProduct: (state, action: PayloadAction<Product>) => {
            const id = crypto.randomUUID();
            //return [...state, {id, ...action.payload}]; //Not neccesary becouse Redux toolkit can mutate the state usiing Immer inside
            state.push({id, ...action.payload});
        },
        rollbackAfterDelete: (state, action: PayloadAction<ProductWithId>) => {
            return [...state, action.payload];
        }
    }
})

export default inventorySlice.reducer;
export const { deleteProductById, AddProduct, rollbackAfterDelete } = inventorySlice.actions;