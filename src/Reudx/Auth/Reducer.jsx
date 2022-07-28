import { Toggle } from "./ActionType";
const initialState={
    toggle:false
}

export const reducer=(state=initialState,{type,action})=>{
  switch(type)
  {
    case Toggle:
        return{
            ...state,
            toggle:!state.toggle
        }
       default :
       return state

    }
  }
