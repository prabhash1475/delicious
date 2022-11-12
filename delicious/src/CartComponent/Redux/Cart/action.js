import {
GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE
} from "./actionTypes"

export const get_data_request=()=>{
    return ({type:GET_DATA_REQUEST})
}

export const get_data_success=(res)=>{
    return ({type:GET_DATA_SUCCESS,payload:res})
}

export const get_data_failure=(error)=>{
    return ({type:GET_DATA_FAILURE,payload:error})
}

