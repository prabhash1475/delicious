import { 
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  Heading, 
  HStack, 
  Image, 
  SimpleGrid, 
  Text, 
  useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useState1 } from "./Hooks"
import { OrderBox } from "./OrderBox";
import metopiaImg from "./Metopia3.png"
import { Calc } from "./Calc";
import { useEffect } from "react";
import {InfoIcon} from '@chakra-ui/icons'
import {useDispatch,useSelector} from 'react-redux'
import { get_data_failure, get_data_request, get_data_success } from "./Redux/Cart/action";
import { loadData, saveData } from "./Redux/utils/localStorage";

export const Cart=()=>{

      const { isOpen, onOpen, onClose } = useDisclosure();
      const [size, setSize] = useState1('');
      let [subtotal, setSubtotal] = useState1(0);
      let [total, setTotal] = useState1(0);
      let [Dc, setDc] = useState1(loadData("Dc") || 0);
      let [cartData, setcartData] = useState1(loadData("cartData") || []);
      let [sampleCartData,setsampleCartData]=useState1(loadData("sampleCartData") || []);
      const [display,setDisplay]=useState1('block');
      

      const data=useSelector((store)=>store.cart.data)
      const dispatch=useDispatch();

     saveData("sampleCartData",data)
    //  const sampleCartData=loadData("sampleCartData") || []
      
      const fetchData=(url)=>{
        dispatch(get_data_request())
         axios.get(url).then((res)=>{
          // console.log(r)
          dispatch(get_data_success(res.data))
          console.log(res.data)
         }).catch((err)=>{
          // console.log(err)
          dispatch(get_data_failure(err.message))
         })
      }

      useEffect(()=>{
        fetchData('https://tan-real-buffalo.cyclic.app/Biryani&Kebabs')
      },[])
    
      const handleClick = (newSize) => {
        console.log(newSize)
        setSize(newSize)
        onOpen()
      }

      // console.log(data,"Hello")

    //   const calc=()=>{
    //     console.log(subtotal)
    //     subtotal=cartData.map((e)=>{
    //     setSubtotal(+subtotal+(+e.price));
    //   })
    //   console.log(subtotal)
    //   return +subtotal
    // }
    let price=0;
    // const cal=calc()
    // console.log(calc())  
    const calc=()=>{
     cartData.map((e,i)=>{
      let priceArr=(e.price.split("").map(Number))
      // console.log(price)
      priceArr.shift()
       price=priceArr.join("")
      // console.log(typeof(+price),price)
      // console.log((+subtotal)+(+e.price),i,e.price,subtotal)
      return (subtotal=(+price)+(+subtotal))});
      // subtotal<399?setDc(39):setDc(0)
     }
 
      calc();


      useEffect((e)=>{
        if(subtotal<399 && subtotal>0){
          setDc(39)
       }else{
        setDc(0)
       }
      //  total=subtotal+Dc
      },[Dc,subtotal,total])

    //   if(subtotal<399){
    //     setDc(39)
    //  }
      // calc2
  
    
     console.log(Dc)
    // else{
    //    setDc(0)
    //  }
    // let arr='123' 
  //  arr.shift()
  //   console.log(arr)

    total=subtotal+Dc

    // const showCalc=()=>{
    //   window.location.href='#BillDetails'
    // }

    const addToCart=(e)=>{
        // console.log(e)
        let data=[...cartData,e];
        saveData("cartData",data);
        let data2=sampleCartData.filter((ele)=>{
          
          if(e.id==ele.id){
            console.log(ele.id,e.id)
          }
          return ele.id!=e.id;
        })
        console.log(data2.length)
        saveData("sampleCartData",data2)
        setsampleCartData(data2)
        setcartData([...cartData,e])
      //  console.log(cartData)
    }



  //   const handleClose=(ele)=>{
  //     let data=cartData.filter((e)=>{
  //      console.log(e.id,ele.id)
  //        return e.id!=ele.id
  //     })
  //    //  console.log(ele,cartData);
  //     saveData("cartData",data)
  //     setcartData(data)
  //     setDisplay('none')
  //  }

    const checkout=()=>{
      return(<></>)
    }


    
      return (
        <>
          {/* {sizes.map((size) => ( */}
            <Button
              onClick={(size={base:"xs",sm:"xs",md:"sm",lg:"sm"}) => handleClick(size)}
              key={size}
              m={4}
              bg={'green'}
            >Cart</Button>
            {/* // ))}  */}
    
          <Drawer onClose={onClose} isOpen={isOpen} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}}>
            <DrawerOverlay />
            <DrawerContent bg='white' color={'black'}>
              <DrawerCloseButton />
              <DrawerHeader bg={'white'} color={'black'} fontSize={"2xl"}>
              Order Summary
              </DrawerHeader>
              <DrawerBody  w={'100%'} bg={'white'}>
                  <Box fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px",xl:"14px",'2xl':"14px"}} p='2%'
                   h={'44px'} bg={'green'} w={'100%'} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  {subtotal<399?"Your cart value is less than ₹399 & delivery charge applies":"Congratulations, Your delivery charge is waived off!!!"}
                  </Box>
                  <Box mt={5} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" w={'100%'}>
                  <Box id="orderBox" color={'grey'} h={'40px'} bg="green.50"
                   border={'1px solid green'} w={'100%'} fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px",xl:"14px",'2xl':"14px"}}
                   display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  Congratulations! You've saved ₹144
                  </Box>
                  {/* <OrderBox></OrderBox>
                  <OrderBox></OrderBox> */}
                  {/* <Box > */}
                  {cartData.map((e,i)=>
                    // <Text>{e.name}</Text>
                       <OrderBox key={i} cartData={cartData} setcartData={setcartData} data={e} index={i} subtotal={subtotal} setSubtotal={setSubtotal} total={total} setTotal={setTotal} Dc={Dc} setDc={setDc} />
                  )}
                  {/* </Box> */}
                  </Box>
                  <Text fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px",xl:"14px",'2xl':"14px"}} color={"black"} mb="5%" mt="12%">Stop paying delivery charges. Join Meatopia today!</Text>
                  <Box borderRadius={7} bg="#ff914d" pr={5} pl={5} display={'flex'} 
                  justifyContent={'space-between'} alignItems={'center'} 
                  border={'1px solid red'} h={{base:"50px",sm:"50px",md:"50px",lg:"60px",xl:"60px",'2xl':"60px"}}>
                    <Image src={metopiaImg} h={'100%'}></Image>
                    <Text fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px",xl:"14px",'2xl':"14px"}} fontWeight={'bold'} color={'red'} _hover={{cursor:'pointer'}}>JOIN NOW </Text>
                  </Box>
                    {/* <-----------------------------Sample products-----------------------> */}
                   
                   <Text mt='22px' mb='11px' fontWeight='semibold' fontSize='18px'>You May Want To Try</Text>
                   {/* <Box w='100%'> */}
                   <SimpleGrid columns={2} w='100%' spacing='5px'>
                        {sampleCartData.map((e)=>{
                        let priceArr=(e.price.split("").map(Number))
                        priceArr.shift()
                        let price=priceArr.join("");
                        // console.log(e.price,price)
                        return (
                          <Box key={e.id} position='relative' h={{base:"166px",sm:"188px",md:"222",lg:"222px",xl:"222px","2xl":"222px"}} p='2%' boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" >
                              <Image w='100%' h={{base:"77px",sm:"77px",md:"111px",lg:"111px"}} src={e.imgUrl}></Image>
                              <Text fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px"}}>{e.name}</Text>
                              <HStack w='100%'>
                                <Text fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px"}} color='gray'>{e.weight}</Text>
                                {/* <Divider orientation="verticle" color='red'></Divider> */}
                                <Text fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px"}} color='gray'>{e.price}</Text>
                                <Text fontSize={{base:"10px",sm:"12px",md:"14px",lg:"14px"}} color='#ccc' as='del'>₹{(+price+(+price*0.1)).toFixed(0)}</Text>
                              </HStack>
                              <a href="#orderBox"><Button fontSize={"12px"} border={'1px solid red'} color='red' h='15%' mt='5px' position='absolute' bottom='5px' onClick={()=>addToCart(e)}>ADD</Button></a>
                          </Box>)}
                        )}
                   </SimpleGrid>
                   {/* </Box> */}
                  
                  {/* /*<-------------------------Bill Details------------------------------>/* */}
                  <Box className="Bill" id='BillDetails' h='166px' border='3px dashed #ccc' p='3%' mt='33px'>
                  <Text fontWeight='semibold' fontSize='20px'>Bill Details</Text>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Subtotal</Text>
                    <Text>{subtotal}</Text>
                  </HStack>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Delivery Charge</Text>
                    <Text>{Dc}</Text>
                  </HStack>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Discount</Text>
                    <Text>0</Text>
                  </HStack>
                  <hr color="grey"></hr>
                  <HStack justify='space-between'>
                    <Text  fontWeight='bold'>Total</Text>
                    <Text  fontWeight='bold' color='red'> ₹{total}</Text>
                  </HStack>
                  </Box>
                  
              </DrawerBody>
              <DrawerFooter boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" 
                position='sticky' margin='auto' display='flex' 
                flexDirection='column' justifyContent='space-between' 
                mb={2} h="125px" bg={'white'} w={'96%'} borderRadius='10px'>
                <HStack  justify='space-between' w='100%'>
                <Text fontWeight='semibold' fontSize='20px'>Shipping address</Text>
                <Text color='red' _hover={{cursor:'pointer'}}>Add Address</Text>
                </HStack>
                <HStack justify='space-between' h='55%' w={{base:"120%",sm:"115%",md:"110%",lg:"111%"}} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                    <Center>
                      <Text ml={{base:"33px",sm:"33px",md:"55px",lg:"55px"}} fontWeight='bold'>Total : ₹{total}</Text><a href="#BillDetails"><InfoIcon  color='red' mt='-3px' ml='3px' _hover={{cursor:"pointer"}}></InfoIcon></a>
                    </Center>
                      <Button bg='gray.400' _hover={{bg:'gray.400'}} w='50%' h='100%' 
                      fontSize={{base:"10px",sm:"11px",md:"16px",lg:"18px"}} onClick={()=>checkout()}>Proceed to checkout</Button>
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
    }
// }