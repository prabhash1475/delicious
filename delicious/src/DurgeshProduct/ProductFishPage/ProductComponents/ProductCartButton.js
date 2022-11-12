import React from 'react' 
import "../ProductFish.css"


import {useToast, Button , Wrap , WrapItem} from "@chakra-ui/react"

const ProductCartButton = () => {
    
    const toast = useToast()
    const variants = ['top-accent']
  
    return (
      <Wrap>
        {variants.map((variant,i) => (
          <WrapItem key={i}>
            <Button id="ProductAddToCartButton"  background="#D11243" color="#fff" fontSize="11px" fontWeight="600" borderRadius="5px" height="36px" 
              onClick={() =>
                toast({
                  title: 'Successfully Added to Cart',
                  variant: variant,
                  duration: 800,
                  isClosable: true,
                  
                 
                })
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
