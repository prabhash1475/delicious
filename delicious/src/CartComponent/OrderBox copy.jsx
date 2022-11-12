import { Box, Button, CloseButton, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"



export const OrderBox=(props)=>{
  //  console.log(props)
    const { data:ele,index,subtotal,setSubtotal,total,setTotal,Dc,setDc }=props;
    // console.log(ele)

    const [display,setDisplay]=useState('block');
    const [Qty,setQty]=useState(1);

    useEffect((e)=>{
      if(subtotal<399){
        setDc(39)
     }
    },[Dc,subtotal]);

    let priceArr=(ele.price.split("").map(Number))
        // console.log(price)
    priceArr.shift()
    let price=priceArr.join("")

    const handleClose=()=>{
       setDisplay('none')
    }
    const handleQtyAndPrice1=(e)=>{
      if(Qty===1){
        setQty(Qty-1);
        let priceArr=(e.price.split("").map(Number))
        // console.log(price)
        priceArr.shift()
        let price=priceArr.join("")
        setSubtotal((subtotal)=>subtotal-(+price));
        setDisplay('none')
      }else{
        setQty(Qty-1);
        let priceArr=(e.price.split("").map(Number))
        // console.log(price)
        priceArr.shift()
        let price=priceArr.join("")
        setSubtotal((subtotal)=>subtotal-(+price));
      }
    }

    const handleQtyAndPrice2=(e)=>{
      setQty(Qty+1);
      let priceArr=(e.price.split("").map(Number))
        // console.log(price)
        priceArr.shift()
        let price=priceArr.join("")
      setSubtotal((subtotal)=>subtotal+(+price))
    }

    return(
        <Box display={display}>
        <Box w={'100%'} h={'auto'} color='black'>
        <Box mt={2} h={'auto'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box display={'flex'}>
              <Text mr={3} ml={3} bg={'#ccc'} w={5} display={'flex'} justifyContent={'center'} h='25px'>{index+1}</Text>
              <Text>{ele.name}</Text>
              </Box>
              <CloseButton mr={2} onClick={handleClose}></CloseButton>
        </Box>
        <Box  w='100%' h={10} display={'flex'} justifyContent={'space-between'} alignItems={'center'} 
         pl={{base:"0px",sm:"4px",md:"40px",lg:"40px"}} pr={{base:"11px",sm:"11px",md:"15px",lg:"33px",xl:"33px",'2xl':"33px"}} boxSizing='border-box'>
          <Box display={'flex'} h='100%' alignItems={'center'} >
              <Button p='7px' color={"grey"} h={{base:"60%",sm:"66%",md:"75%",lg:"75%"}} fontSize={13}  borderRadius={7} border={'1px solid gray'}>{ele.weight}</Button>
              <Text ml={1} fontSize={13} color={'red'} fontWeight={'semibold'}>₹ {+price}</Text>
              <Text ml={1} fontSize={13} color={"grey"} fontWeight={'semibold'} as='del'>₹ {+price+(+price*0.1)}</Text>
          </Box>
          <Box display={'flex'} w={75} alignItems='center'>
              <Button onClick={()=>handleQtyAndPrice1(ele)} 
              size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}} mr={2} bg={'#ccc'} 
              _hover={{'bg':"#ccc"}} display={'flex'} justifyContent={'center'} color={"red"} fontSize={18} fontWeight='bold'>-</Button>
              <Text>{Qty}</Text>
              <Button onClick={()=>handleQtyAndPrice2(ele)} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}} 
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