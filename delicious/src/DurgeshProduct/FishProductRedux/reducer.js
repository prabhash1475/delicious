import React from 'react'
import {GET_PRODUCTFISHDATA_REQUEST , GET_PRODUCTFISHDATA_SUCCESS , GET_PRODUCTFISHDATA_FAILURE} from "./actionType" 


const initialState={
    allProductData : [] ,
    dataIsLoading : false , 
    dataIsError : false , 

} 

const reducerProduct = (oldstate=initialState , action) => {
 
    switch(action.type){
       case GET_PRODUCTFISHDATA_REQUEST:
        return{...oldstate , dataIsLoading:true }
        case GET_PRODUCTFISHDATA_SUCCESS:
            return{...oldstate, allProductData:action.payload , dataIsLoading:false}
        case GET_PRODUCTFISHDATA_FAILURE:
            return{...oldstate, dataIsLoading:false , dataIsError:true }    
       
        default:
        return oldstate
    }
    

}
// console.log(initialState.allProductData)


export default reducerProduct ;
