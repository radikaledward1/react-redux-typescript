import { useAppDispatch } from "../state";
import { ProductId, Product } from "../../utils/types";
import { deleteProductById, AddProduct } from "../../store/inventory/slice";

export const useInventoryActions = () => {
    const dispatch = useAppDispatch();

    const handlerDeleteProductById = (id: ProductId) => {
        dispatch(deleteProductById(id));
    }

    const handlerAddProduct = (product: Product) => {
        dispatch(AddProduct(product));
    }

    return {
        handlerDeleteProductById,
        handlerAddProduct
    }

}