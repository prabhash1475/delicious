// import { loadData } from "../utils/localStorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"


// const initialState =  { 
//     isAuth: false, 
//     token: loadData('token') || '',
//     isLoading:false,
//     isError:false,
// }

export const login_request=()=>{
    return (
        {type:LOGIN_REQUEST}
    )
}

export const login_success=()=>{
    let token='login'
    return (
        {type:LOGIN_SUCCESS,payload:token}
    )
}


export const login_failure=()=>{
    return (
        {type:LOGIN_FAILURE}
    )
}