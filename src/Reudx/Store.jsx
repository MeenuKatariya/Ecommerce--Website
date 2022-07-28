import { reducer } from "./Auth/Reducer";
import { applyMiddleware,combineReducers,compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./Auth/Reducer"


const rootReducer=combineReducers({
    auth:authReducer
})

export const store=createStore(rootReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))