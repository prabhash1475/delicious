
import {legacy_createStore,combineReducers} from 'redux';
import { cartReducer} from "./Cart/reducer"
import { authReducer} from "./Auth/reducer"

const rootReducer=combineReducers({auth: authReducer, cart: cartReducer})

export  const store=legacy_createStore(rootReducer);