import React from 'react'
import {Box,Button,Flex,Heading,Image,Spacer,Text,useToast} from '@chakra-ui/react'
import { loadData, saveData } from '../CartComponent/Redux/utils/localStorage';
import { useState1 } from '../CartComponent/Hooks';


const ProductCard = ({data}) => {

  const toast = useToast();
  const [cartData,setcartData] =useState1(loadData("cartData") || [])

  const addToCart=(e)=>{
    console.log(e)
    let data=[...cartData,e];
    saveData("cartData",data);
    return  (toast({
      title: 'Thank You...!',
      description: "Order Added to the Cart.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    }))
  }

  return (
    <Box h='470px' >
        <Box key={data.id} w='368px'  shadow='lg' borderRadius='8px' bg='#fff' cursor='pointer'>
            <Image src={data.img} borderTopRadius='8px' h='230px' w='368px' />
            <Box p='15px 15px 0'>

            <Heading  fontSize='15px' fontWeight='600' color='#4a4a4a'  minHeight='42px'>
                {data.title}
            </Heading>
            <Text color='#727272' fontSize='14px' lineHeight='1.2' mb='10px' noOfLines={1} overflow='hidden' textOverflow='ellipsis' >{data.desc}</Text>
            <Text fontSize='14px' fontWeight='600' my='10px'>{data.weight}</Text>
            <Flex align='center' py='10px'>
                <Box color='#D11243' >
                <Text as='span' fontSize='14px' fontWeight='600' >MRP:</Text ><Text as='span' fontSize='20px' fontWeight='600'>{data.mrp}</Text>
                </Box>
                <Spacer/>
                <Box><Button
              bg="#D11243"
              variant="solid"
              colorScheme="none"
              color="#fff"
              fontSize="11px"
              h="35px"
              p='10px 12px'
              fontWeight='600'
              onClick={()=>addToCart(data)}
            >
              ADD TO CART
            </Button>
</Box>
                
            </Flex>
            
                
            </Box>
            
            
            <Box display='flex' justifyContent='center' borderTop='solid 2px #f8f8f8' p='5px'>
                <Image src='https://www.licious.in/img/rebranding/express_delivery.svg' mr='8px' mt='1px' h='24px'/>
                
                <Text color='#aeaeae' fontSize='14px' >Tomorrow <Text as='span' color='#aeaeae' fontSize='14px' fontWeight='700'>7 AM-10 AM</Text> </Text>
                

                
                
            </Box>
            


        </Box>
    </Box>
  )
}

export default ProductCard