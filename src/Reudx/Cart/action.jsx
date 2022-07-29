import axios from "axios";
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


  export const getUserCart=()=>(dispatch)=>{
    
   dispatch(loadingCart())
     axios({
        method:"get",
        url:"http://localhost:8000/user",

     }).then(res=>{
        dispatch(getCart(res.data.cartItems))
     }).
    catch(err=>{
        // console.log(error)
        dispatch(errorCart())
    })
    
  }

 export const addInCart=(data)=>(dispatch,state)=>{
    const cart=state()?.cart?.cart;
    dispatch(loadingCart())
    axios({
      metohd:"patch",
      url:"http://localhost:8000/user",
      data:{
        cartItems:[...cart,{...data,count:1}]
      }
    }).then(res=>{dispatch(addtoCart())
     
        dispatch(getUserCart())
         
    }).catch(err=>{
      dispatch(errorCart())
    })
  }
