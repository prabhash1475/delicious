import React from 'react'
import { Box , Button, Heading , Text , Skeleton , SkeletonText} from "@chakra-ui/react"

const ProductSkeleton = () => {
  return (
    <div>
    <Box shadow="2xl" w={{base:"90vw", sm: "55vw", md: "43.5vw", lg: "25vw" ,xl: "25vw",'2xl': "25vw",}} h={{base:"71vh", sm: "73vh", md: "73vh", lg: "67vh" ,xl: "31vw",'2xl': "29vw",}} borderRadius="20px" >
       
     <Skeleton animation="none" height="60%">
   
       </Skeleton>
       
       
         <Skeleton w="90%" mt={4} display={{base:"block", sm: "block", md: "block", lg: "block" ,xl: "block",'2xl': "block",}}>Text </Skeleton>
         <Skeleton mt={5} mb={5} w="60%" display={{base:"none", sm: "none", md: "none", lg: "block" ,xl: "block",'2xl': "block",}} >Text </Skeleton>
         <Skeleton mb={5} w="40%" display={{base:"none", sm: "none", md: "none", lg: "none" ,xl: "block",'2xl': "block",}} >Text </Skeleton>
         <Skeleton display={{base:"none", sm: "none", md: "none", lg: "none" ,xl: "block",'2xl': "block",}} >Text </Skeleton>
    </Box>
  
  </div>
            
            
      




  )
}

export default ProductSkeleton
