import React from 'react' 
import "../ProductFish.css"


import {useToast, Button , Wrap , WrapItem} from "@chakra-ui/react"
import { loadData, saveData } from '../../../CartComponent/Redux/utils/localStorage'
import { useState } from 'react'
import { useEffect } from 'react'

const ProductCartButton = ({item}) => {
    
    const toast = useToast()
    const variants = ['top-accent'];
    const [cartData,setcartData]=useState(loadData('cartData') || [])
    // console.log(item)
 

      const addToCart = ()=>{
        
        saveData("cartData" , cartData)
      }

      useEffect(()=>{
        setcartData([...cartData,item])
      },[setcartData])
        



    return (
      <Wrap>
        {variants.map((variant,i) => (
          <WrapItem key={i}>
            <Button id="ProductAddToCartButton"  background="#D11243" color="#fff" fontSize="11px" fontWeight="600" borderRadius="5px" height="36px" 
              onClick={() =>
                // toast({
                //   title: 'Successfully Added to Cart',
                //   variant: variant,
                //   duration: 800,
                //   isClosable: true,
                  
                 
                // })
                addToCart()
              }
              >
              ADD TO CART
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
   
      
  
}

export  {ProductCartButton}
