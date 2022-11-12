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
    Input, 
    Text, 
    useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { OrderBox } from "./OrderBox";
import Logo from "./delicious-logo.png"
import deliciousLoginBgImg1 from "./deliciousLoginBgImg1.jpg"

export const Login=()=>{
    // function SizeExample() {
        const [size, setSize] = useState('');
        const { isOpen, onOpen, onClose } = useDisclosure();
      
        const handleClick = (newSize) => {
          console.log(newSize)
          setSize(newSize)
          onOpen()
        }
        
        const handleClick2=()=>{
            window.location.href='https://www.licious.in/terms'
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
              >Login</Button>
              ))} 
      
      <Drawer className='LoginDrawer' onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent className='LoginDrawer' 
        style={{backgroundImage:'Url("https://thumbs.dreamstime.com/z/raw-meat-various-meats-pork-beef-rustic-background-raw-meat-various-meats-pork-beef-141854433.jpg")'}} 
        >
          <DrawerCloseButton />
          <DrawerHeader>
             <Image src={Logo}></Image>
             {/* <Image src={deliciousLoginImg}></Image> */}
            </DrawerHeader>
          <DrawerBody>
            <Box p='9px' h="77%" mt='27%' bg='white' color='grey'>
              <Heading fontSize='22px' color='black' fontWeight="semibold">Sign In/Sign Up</Heading>
              {/* <input placeholder="Enter Mobile No" style={{border:'1px solid red',color:'grey',backgroundColor:"white", height:'55px'}}></input> */}
              <Input pb="7px" placeholder='Enter Mobile No' _placeholder={{color: 'grey',fontSize:"15px" }} variant='unstyled' pl="5px" size='lg' mt='33px' />
            <hr color="grey"></hr>
            <Button disabled='true' mb='16px' w='100%' h="44px" bg='grey' _hover={{'bg':'grey',cursor:'pointer'}} mt='22px' color='white'>
                  Proceed Via OTP
            </Button>
            <span>By signing in you agree to our</span><span onClick={()=>handleClick2()} style={{display:'inline', color:'red'}}> terms and conditions.</span>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
          </>
        )
      }
// }