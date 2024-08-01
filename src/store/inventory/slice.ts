import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ProductId, Product } from "../../utils/types";
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
            return [...state, {id, ...action.payload}];
        }
    }
})

export default inventorySlice.reducer;
export const { deleteProductById, AddProduct } = inventorySlice.actions;