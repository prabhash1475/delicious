import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"


const initialState={
    registrationData:[],
    loginData:[],
    cartData:[],
    subtotal:0,
    deliveryCharges:0,
    total:0,
    isError:false,
    isLoading:false
}


export const reducer=(state=initialState,action)=>{

      switch (action.type){
        case GET_DATA_REQUEST:
            return {...state,isLoading:true};

        case GET_DATA_SUCCESS:
            return {...state,cartData:action.payload};

        case GET_DATA_FAILURE:
                return {...state,isError:true};
        default:
            return state;
        }
}