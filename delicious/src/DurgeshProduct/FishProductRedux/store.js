import reducerProduct from "./reducer" ;
import {legacy_createStore} from "redux" ; 
// import thunk from "redux-thunk"



export const store = legacy_createStore(reducerProduct)