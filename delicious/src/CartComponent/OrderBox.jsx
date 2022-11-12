import { Box, Button, CloseButton, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { loadData, saveData } from "./Redux/utils/localStorage";



export const OrderBox=(props)=>{
  //  console.log(props)
    const { data:ele,index,subtotal,setSubtotal,total,setTotal,Dc,setDc,cartData,setcartData }=props;
    // console.log(ele)

    // const cartData=loadData("cartData") || [] ;

    // useEffect(()=>{
    //    console.log(cartData)
    //  },[cartData])

    const [display,setDisplay]=useState('block');
    const [Qty,setQty]=useState(1);

    useEffect((e)=>{
      if(subtotal<399 && subtotal>0){
        setDc(39);
     }
    },[Dc,subtotal,total])


    let priceArr=(ele.price.split("").map(Number))
        // console.log(price)
    priceArr.shift()
    let price=priceArr.join("")


    const handleClose=(ele)=>{
       let data=cartData.filter((e)=>{
        // console.log(e.id,ele.id)
          return e.id!=ele.id
       })
      //  console.log(ele,cartData);
       saveData("cartData",data);
       setcartData(data)
       setDisplay('none');
       if(subtotal<399 && subtotal>0){
        setDc(39);
        saveData("Dc",39)
     }else{
      saveData("Dc",0)
     }
    //  console.log(Dc)
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
        <Box display={display} key={index+1}>
        <Box w={'100%'} h={'auto'} color='black'>
        <Box mt={2} h={'auto'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box display={'flex'}>
              <Text mr={3} ml={3} bg={'#ccc'} w={5} display={'flex'} justifyContent={'center'} h='25px'>{index+1}</Text>
              <Text fontSize={{base:"11px",sm:"13px",md:"16px",lg:"16px"}}>{ele.name}</Text>
              </Box>
              <CloseButton mr={2} onClick={()=>handleClose(ele)}></CloseButton>
        </Box>
        <Box  w='100%' h={10} display={'flex'} justifyContent={'space-between'} alignItems={'center'} 
         pl={{base:"14px",sm:"14px",md:"40px",lg:"40px"}} pr={{base:"11px",sm:"11px",md:"15px",lg:"33px",xl:"33px",'2xl':"33px"}} boxSizing='border-box' mb="2%" mt="2%">
          <Box display={'flex'} h='100%' alignItems={'center'} >
              <Button p='7px' color={"grey"} h={{base:"60%",sm:"66%",md:"75%",lg:"75%"}} fontSize={{base:"10px",sm:"11px",md:"12px",lg:"13px"}}  borderRadius={7} border={'1px solid gray'}>{ele.weight}</Button>
              <Text ml={1} fontSize={{base:"10px",sm:"11px",md:"12px",lg:"13px"}} color={'red'} fontWeight={'semibold'}>₹ {+price}</Text>
              <Text ml={1} fontSize={{base:"10px",sm:"11px",md:"12px",lg:"13px"}}  color={"grey"} fontWeight={'semibold'} as='del'>₹{(+price+(+price*0.1)).toFixed(0)}</Text>
          </Box>
          <Box display={'flex'} w="30%" alignItems='center' justifyContent='flex-end'>
              <Button onClick={()=>handleQtyAndPrice1(ele)} 
              size={{base:"xxs",sm:"xs",md:"sm",lg:"sm"}} mr={2} bg={{base:"none",sm:"#ccc",md:"#ccc",lg:"#ccc"}} 
              _hover={{'bg':"#ccc"}} display={'flex'} justifyContent={'center'} color={"red"} fontSize={{base:"16px",sm:"16px",md:"18px",lg:"18px"}}  fontWeight='bold'>-</Button>
              <Text fontSize={{base:"10px",sm:"11px",md:"12px",lg:"13px"}} >{Qty}</Text>
              <Button onClick={()=>handleQtyAndPrice2(ele)} size={{base:"xxs",sm:"xs",md:"sm",lg:"sm"}} 
              ml={2} bg={{base:"none",sm:"#ccc",md:"#ccc",lg:"#ccc"}} _hover={{'bg':"#ccc"}}  display={'flex'} 
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