import { ADD_TO_CART, CLEAR_CART, ERROR_IN_CART, GET_CART, LOADING_CART } from "./actionType";
import { INC_CART} from "./actionType";
import { DEC_CART } from "./actionType";
import { DELETE_ITEM_FROM_CART } from "./actionType";


export const addtoCart=()=>{
    return{
        type:ADD_TO_CART
    }
}

export const incrementCart=()=>{
    return{
        type:INC_CART
    }
}

export const decrementCart=()=>{
    return{
        type:DEC_CART
    }
}

export const deleteItemFromCartCart=()=>{
    return{
        type:DELETE_ITEM_FROM_CART
    }
}

export const loadingCart=()=>{
    return{
        type:LOADING_CART
    }
}

export const errorCart=()=>{
    return{
        type:ERROR_IN_CART
    }
}

export const getCart=(payload)=>{
    return{
        type:GET_CART,
        payload
    }
}
export const clearCart=()=>{
    return{
        type:CLEAR_CART
    }
}