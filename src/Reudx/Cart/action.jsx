import axios from "axios";
import { ADD_TO_CART, CLEAR_CART, ERROR_IN_CART, GET_CART, LOADING_CART } from "./actionType";
import { INC_CART} from "./actionType";
import { DEC_CART } from "./actionType";
import { DELETE_ITEM_FROM_CART } from "./actionType";


export const addtoCart=(payload)=>{
    return{
        type:ADD_TO_CART,
        payload
    }
}

export const incrementCart=(payload)=>{
    return{
        type:INC_CART,
        payload
    }
}

export const decrementCart=(payload)=>{
    return{
        type:DEC_CART,
        payload
    }
}

export const deleteItemFromCartCart=(payload)=>{
    return{
        type:DELETE_ITEM_FROM_CART,
        payload
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



//   export const getUserCart=()=>(dispatch)=>{
    
//    dispatch(loadingCart())
//      axios({
//         method:"get",
//         url:"http://localhost:8000/user",

//      }).then(res=>{
//         dispatch(getCart(res.data.cartItems))
//      }).
//     catch(err=>{
//         // console.log(error)
//         dispatch(errorCart())
//     })
    
//   }

 