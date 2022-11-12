import { Box, Button, CloseButton, Text } from "@chakra-ui/react"
import { useState } from "react"



export const OrderBox=()=>{

    const [display,setDisplay]=useState('block');
    const [count,setCount]=useState(0);

    const handleClose=()=>{
       setDisplay('none')
    }
    const handleCount=()=>{
      if(count===0){
        setDisplay('none')
      }else{
        setCount(count-1)
      }
    }

    return(
        <Box display={display}>
        <Box w={'100%'} h={'90px'} color='black'>
        <Box mt={2} h={10}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box display={'flex'}>
              <Text mr={3} ml={3} bg={'#ccc'} w={5} display={'flex'} justifyContent={'center'}>1</Text>
              <Text>Goat Curry Cut</Text>
              </Box>
              <CloseButton mr={2} onClick={handleClose}></CloseButton>
        </Box>
        <Box  w='100%' h={10} display={'flex'} justifyContent={'space-between'} alignItems={'center'} 
         pl={{base:"0px",sm:"4px",md:"40px",lg:"40px"}} pr={{base:"11px",sm:"11px",md:"15px",lg:"33px",xl:"33px",'2xl':"33px"}} boxSizing='border-box'>
          <Box display={'flex'} h='100%' alignItems={'center'} >
              <Button p='7px' color={"grey"} h={{base:"60px",sm:"66%",md:"75%",lg:"75%"}} fontSize={13}  borderRadius={7} border={'1px solid gray'}>500gms</Button>
              <Text ml={1} fontSize={13} color={'red'} fontWeight={'semibold'}>₹ 480.25</Text>
              <Text ml={1} fontSize={13} color={"grey"} fontWeight={'semibold'} as='del'>₹ 565.00</Text>
          </Box>
          <Box display={'flex'} w={75} alignItems='center'>
              <Button onClick={()=>handleCount()} 
              size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}} mr={2} bg={'#ccc'} 
              _hover={{'bg':"#ccc"}} display={'flex'} justifyContent={'center'} color={"red"} fontSize={18} fontWeight='bold'>-</Button>
              <Text>{count}</Text>
              <Button onClick={()=>setCount(count+1)} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}} 
              ml={2} bg={'#ccc'} _hover={{'bg':"#ccc"}}  display={'flex'} 
              justifyContent={'center'} color={"red"} fontSize={18} 
              fontWeight='bold'>+</Button>
          </Box>
        </Box>
        
      </Box>
      <Box w='95%' margin={'auto'}>
      <hr color="grey"></hr>
      </Box>
      
      </Box>
    )
}