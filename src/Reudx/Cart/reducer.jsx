import { ADD_TO_CART, CLEAR_CART, DEC_CART, DELETE_ITEM_FROM_CART, ERROR_IN_CART, GET_CART, INC_CART, LOADING_CART } from "./actionType"

const init={
    loading:false,
    error:false,
    cart:[]
}
export const reducer=(state=init,{type,payload} )=> {
    switch(type){
        case GET_CART:{
            return{
                ...state,
                loading:false,
                error:false,
                cart:payload
            }
        }

        case LOADING_CART:{
            return{
                ...state,
                loading:true
                
                
            }
        }

        case ERROR_IN_CART:{
            return{
                ...state,
                error:true
                
                
            }
        }

        case ADD_TO_CART:{
            return{
                ...state,
                loading:false,
                error:false,
                
                
            }
        }

        case INC_CART:{
            return{
                ...state,
                loading:false,
                error:false,
                
                
            }
        }

        case DEC_CART:{
            return{
                ...state,
                loading:false,
                error:false,
                
                
            }
        }

        case DELETE_ITEM_FROM_CART:{
            return{
                ...state,
                loading:false,
                error:false,
                
                
            }
        }

        
        default:
            return state
    }
}