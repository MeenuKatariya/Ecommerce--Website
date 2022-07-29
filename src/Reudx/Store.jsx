import { reducer } from "./Auth/Reducer";
import { applyMiddleware,combineReducers,compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./Auth/Reducer"
import {reducer as cartReducer} from "./Cart/reducer"

const rootReducer=combineReducers({
    auth:authReducer,
    cart:cartReducer
})

export const store=createStore(rootReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))