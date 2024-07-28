import { useAppDispatch } from "../state";
import { ProductId } from "../../utils/types";
import { deleteProductById } from "../../store/inventory/slice";

export const useInventoryActions = () => {
    const dispatch = useAppDispatch();

    const handlerDeleteProductById = (id: ProductId) => {
        dispatch(deleteProductById(id));
    }

    return {
        handlerDeleteProductById
    }

}