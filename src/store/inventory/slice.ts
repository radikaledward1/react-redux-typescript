import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ProductWithId, ProductId } from "../../utils/types";

const Products: ProductWithId[] = [
    {
        id: "1",
        sku: "123",
        name: "Product 1",
        category: "Category 1",
        description: "Description 1",
        stock: 10
    },
    {
        id: "2",
        sku: "456",
        name: "Product 2",
        category: "Category 2",
        description: "Description 2",
        stock: 20
    },
    {
        id: "3",
        sku: "789",
        name: "Product 3",
        category: "Category 3",
        description: "Description 3",
        stock: 30
    },
    {
        id: "4",
        sku: "101112",
        name: "Product 4",
        category: "Category 4",
        description: "Description 4",
        stock: 40
    },
    {
        id: "5",
        sku: "131415",
        name: "Product 5",
        category: "Category 5",
        description: "Description 5",
        stock: 50
    }
];

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: Products,
    reducers: {
        deleteProductById: (state, action: PayloadAction<ProductId>) => {
            const id = action.payload;
            return state.filter((product) => product.id !== id);
        }
    }
})

export default inventorySlice.reducer;
export const { deleteProductById } = inventorySlice.actions;