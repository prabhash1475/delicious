import {GET_PRODUCTFISHDATA_REQUEST , GET_PRODUCTFISHDATA_SUCCESS , GET_PRODUCTFISHDATA_FAILURE} from "./actionType" 
import axios from "axios" 

const getProductFishDataReq = ()=>{
  return {
    type: GET_PRODUCTFISHDATA_REQUEST , 

  }
}

const getProductFishDataSuccess = (data) => {
 return {
    type:GET_PRODUCTFISHDATA_SUCCESS , 
    payload: data 

 }
}

const getProductFishDataFailure = () =>{
    return {
        type:GET_PRODUCTFISHDATA_FAILURE  , 
    }
}




export {getProductFishDataFailure , getProductFishDataReq , getProductFishDataSuccess}