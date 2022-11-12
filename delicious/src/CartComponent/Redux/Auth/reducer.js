import {LOGIN_FAILURE, LOGIN_REQUEST,LOGIN_SUCCESS} from "./actionTypes"
import {saveData,loadData} from "../utils/localStorage"

const initialState =  { 
    isAuth: false, 
    token: loadData('token') || '',
    isLoading:false,
    isError:false,
}

export const authReducer=( state=initialState, {type, payload} )=>{
    switch(type){

        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        
        case LOGIN_SUCCESS:
            console.log(payload)
            saveData('token', payload)
            return {
                ...state,
                token: payload.token,
                isAuth: true
            }

            case LOGIN_FAILURE:
            return {
                ...state,
                isError: true
            }

            default:
                return state;
    }
}


