import { useState } from "react";

export const useState1=(initialValue)=>{
   const [value,setValue]=useState(initialValue);
    const setInitialValue=(newValue)=>{
        setValue(newValue)
          return value; 
    }
   
    return([value,setInitialValue])
}