import { 
  Alert,
  AlertIcon,
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
import {useDispatch} from 'react-redux'
import deliciousLoginBgImg1 from "./deliciousLoginBgImg1.jpg"
import { login_success,login_failure,login_request } from "./Redux/Auth/action";

export const Login=()=>{
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [size, setSize] = useState('');
      const [mobileNo, setMobileNo] = useState('');
      const [OTP, setOTP] = useState('');
      const [disabled,setDisabled]=useState(true);
      const [bg,setBg]=useState('grey');
      const [display0,setDisplay0]=useState('block');
      const [display1,setDisplay1]=useState('none');
      const [display2,setDisplay2]=useState('none');

      const dispatch=useDispatch()
    
      const registrationData=[
          9423271309,9421218409,9421167202
      ]

      const loginData=[
          
      ]

      const handleClick = (newSize) => {
        console.log(newSize)
        setSize(newSize)
        onOpen()
      }
      
      const handleClick2=()=>{
          window.location.href='https://www.licious.in/terms'
      }

      const handleMobile=(e)=>{
          setMobileNo(e.target.value);
          // console.log(mobileNo.length)
          if(mobileNo.length===9){
              // console.log('win')
              setDisabled(false);
              setBg('red')
          }
      }

      const handleLogin=()=>{
          setDisplay0('none')
          setDisplay1('block')
          // setDisplay2('block')
          let status=Login();
          console.log(status)
          if(status===true){
              // console.log('login successful')
              loginData.push(mobileNo);
              dispatch(login_success())
          }else{
              // console.log('Registration successful')
                 registrationData.push(mobileNo)
              //    dispatch(login_failure())
          }
          console.log(registrationData,loginData)
      };

      const Login=()=>{
          dispatch(login_request())
          console.log(mobileNo);
          // console.log(registrationData,loginData)
          let status=false;
          registrationData.map((e,i)=>{
              if(e==mobileNo){
                  console.log(e,i)
                  
                  // return true;
                  status=true;
              }
          });
          console.log(status);
      
      //    console.log(registrationData,loginData)
      // return false;
      return status;
      }

      const handleOTP=(e)=>{
          setOTP(e.target.value);
      }

      const handleLoginOTP=()=>{
          setDisplay2('flex');
          setTimeout(()=>{
              setDisplay2('none'); 
          },3000)
           if(OTP==='12345'){
              console.log("LOGIN Successful...!")
           }else{
              console.log("Invalid OTP...!")
           }
      }
      // const sizes = ['sm','xs'];
    
      return (
        <>
          {/* {sizes.map((size) => ( */}
            <Button
              onClick={(size={base:"xs",sm:"xs",md:"sm",lg:"sm"}) => handleClick(size)}
              key={size}
              m={4}
              bg={'green'}
            >Login</Button>
          {/* //   ))}  */}
    
    <Drawer className='LoginDrawer' onClose={onClose} isOpen={isOpen} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}}>
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
            <Input onChange={(e)=>handleMobile(e)} pb="7px" placeholder='Enter Mobile No' 
            _placeholder={{color: 'grey',fontSize:"15px" }} 
            variant='unstyled' pl="5px" size='lg' mt='33px' color="black"/>
          <hr color="grey"></hr>
          <Button onClick={()=>handleLogin()} display={display0} disabled={disabled} mb='16px' w='100%' h="44px" bg={bg} _hover={{'bg':bg,cursor:'pointer'}} mt='22px' color='white'>
                Proceed Via OTP
          </Button>
          <Input display={display1} onChange={(e)=>handleOTP(e)} pb="7px" placeholder='Enter OTP' 
            _placeholder={{color: 'grey',fontSize:"15px" }}  pt='5%'
            variant='unstyled' pl="5px" 
            size='lg' mt='px' color='black' />
            {/* <input type="text" style={{backgroundColor:'white', border:'1px solid #ccc', width:"99%",height:'40px'}} /> */}
          <hr style={{display:display1}} color="grey"></hr>
          <Alert display={display2}  status='success' mt='5px' mb='5px'>
          <AlertIcon  />
              An OTP is send to your mobile number.
          </Alert>
          <Button display={display1} onClick={()=>handleLoginOTP()} disabled={disabled} mb='16px' w='100%' h="44px" bg={'red'} _hover={{'bg':'red',cursor:'pointer'}} mt='22px' color='white'>
                Confirm OTP
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