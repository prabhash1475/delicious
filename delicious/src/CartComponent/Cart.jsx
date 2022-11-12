import { 
  Box,
  Button,
  CloseButton,
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
  Text, 
  useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { OrderBox } from "./OrderBox";
import metopiaImg from "./Metopia3.png"

export const Cart=()=>{
      const [size, setSize] = useState('');
      const { isOpen, onOpen, onClose } = useDisclosure();
    
      const handleClick = (newSize) => {
        console.log(newSize)
        setSize(newSize)
        onOpen()
      }
    
      const sizes = ['sm','xs'];
    
      return (
        <>
          {sizes.map((size) => (
            <Button
              onClick={() => handleClick(size)}
              key={size}
              m={4}
              bg={'green'}
            >Cart</Button>
            ))} 
    
          <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerOverlay />
            <DrawerContent bg='white' color={'black'}>
              <DrawerCloseButton />
              <DrawerHeader bg={'white'} color={'black'} fontSize={"2xl"}>
              Order Summary
              </DrawerHeader>
              <DrawerBody  w={'100%'} bg={'white'}>
                  <Box fontSize={{base:"10px",sm:"12px",md:"14px",lg:"16px",xl:"16px",'2xl':"16px"}}
                   h={'40px'} bg={'green'} w={'100%'} color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  Congratulations, Your delivery charge is waived off!!!
                  </Box>
                  <Box mt={5} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" w={'100%'}>
                  <Box color={'grey'} h={'40px'} bg="green.50"
                   border={'1px solid green'} w={'100%'}
                   fontSize={{base:"10px",sm:"12px",md:"14px",lg:"16px",xl:"16px",'2xl':"16px"}}
                   display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  Congratulations! You've saved ₹144
                  </Box>
                  <OrderBox></OrderBox>
                  <OrderBox></OrderBox>
                  </Box>
                  <Text color={"black"} mt={3} mb={3}>Stop paying delivery charges. Join Meatopia today!</Text>
                  <Box borderRadius={7} bg="#ff914d" pr={5} pl={5} display={'flex'} 
                  justifyContent={'space-between'} alignItems={'center'} 
                  border={'1px solid red'} h={{base:"50px",sm:"50px",md:"50px",lg:"60px",xl:"60px",'2xl':"60px"}}>
                    <Image src={metopiaImg} h={'100%'}></Image>
                    <Text fontWeight={'bold'} color={'red'} _hover={{cursor:'pointer'}}>JOIN NOW </Text>
                  </Box>
                  <Box className="Bill" h='166px' border='3px dashed #ccc' p='3%' mt='33px'>
                  <Text fontWeight='semibold' fontSize='20px'>Bill Details</Text>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Subtotal</Text>
                    <Text>1612.1</Text>
                  </HStack>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Delivery Charge</Text>
                    <Text>0</Text>
                  </HStack>
                  <HStack justify='space-between' mb='3px'>
                    <Text>Discount</Text>
                    <Text>0</Text>
                  </HStack>
                  <hr color="grey"></hr>
                  <HStack justify='space-between'>
                    <Text  fontWeight='bold'>Total</Text>
                    <Text  fontWeight='bold' color='red'> ₹1612.1</Text>
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
                      <Text ml='15px' fontWeight='bold'>Total : ₹ 1612.1</Text>
                      <Button bg='gray.400' _hover={{bg:'gray.400'}} w='50%' h='100%' 
                      fontSize={{base:"12px",sm:"13px",md:"16px",lg:"18px"}}>Proceed to checkout</Button>
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
    }
