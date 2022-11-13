import { 
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Heading, 
  Image, 
  Input, 
  Text, 
  useDisclosure, 
  useToast} from "@chakra-ui/react"
import { useState } from "react"
import {useDispatch} from 'react-redux'
import { login_success,login_failure,login_request } from "./Redux/Auth/action";
import { loadData, saveData } from "./Redux/utils/localStorage";

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
      const [display3,setDisplay3]=useState('none');
      const [display4,setDisplay4]=useState('none');
      const [display5,setDisplay5]=useState('none');
      const [display6,setDisplay6]=useState('none');
      const [signUpData,setSignUpData]=useState(loadData("signUpData") || []);
      const [signInData,setSignInData]=useState(loadData("signInData") || [])

      const toast = useToast();
      const dispatch=useDispatch();

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
          if(mobileNo.length===9){
              setDisabled(false);
              setBg('red')
          }
      }

      const handleLogin=()=>{
          setDisplay0('none')
          setDisplay1('block');
          setDisplay2('flex');
          setDisplay4('block');
          setTimeout(()=>{
              setDisplay2('none'); 
          },3000)
          let RegistrationStatus=Registration();
          if(RegistrationStatus===true){
              var loginStatus=false;
              signInData.map((e)=>{
                  if(e===mobileNo){
                     loginStatus=true
                  }
              });
              if(loginStatus==false){
                  saveData("signInData",[...signInData,mobileNo]);
                  dispatch(login_success());
                  return  (toast({
                      title: 'User have already have an created account.',
                      description: "We've created your account for you.",
                      position: 'bottom-right',
                      status: 'info',
                      duration: 3000,
                      isClosable: true,
                    }))
              }else{
                  dispatch(login_success());
                  return  (toast({
                      title: 'User have already have an created account.',
                      description: "User have already have an created account.",
                      position: 'bottom-right',
                      status: 'info',
                      duration: 3000,
                      isClosable: true,
                    }))
              }
              
              
          }else{
              saveData("signUpData",[...signUpData,mobileNo])
              dispatch(login_success());
              return  (toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  position: 'bottom-right',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                }))
          }
      };

      const Registration=()=>{
          dispatch(login_request())
          let flag=false;
          signUpData.map((e,i)=>{
              if(e==mobileNo){
                  flag=true;
              }
          });        
      return flag;
      }

      const handleOTP=(e)=>{
          setOTP(e.target.value);
      }

      const handleLoginOTP=()=>{
          
         
           if(OTP==='12345'){
              setDisplay4('none');
              setDisplay5('flex');
              setTimeout(()=>{
                  setDisplay5('none'); 
                  onClose()
              },2000)
              // setDisplay6('block')
              return  (toast({
                  title: 'Congratulations..!',
                  position: 'bottom-right',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                }))
           }else{
              console.log("Invalid OTP...!");
              setDisplay3("flex");
              setTimeout(()=>{
                  setDisplay3('none'); 
              },2000)
              setOTP('')
           }
      }
    
      return (
        <>
         <Text
            onClick={(size={base:"xs",sm:"xs",md:"sm",lg:"sm"}) => handleClick(size)}
            key={size}
            m={4} _hover={{cursor:"pointer"}}>
              Login
          </Text>
    
    <Drawer className='LoginDrawer' onClose={onClose} isOpen={isOpen} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}}>
      <DrawerOverlay />
      <DrawerContent className='LoginDrawer' 
      style={{backgroundImage:'Url("https://thumbs.dreamstime.com/z/raw-meat-various-meats-pork-beef-rustic-background-raw-meat-various-meats-pork-beef-141854433.jpg")'}} 
      >
        <DrawerCloseButton />
        <DrawerHeader>
           <Image src="https://i.postimg.cc/xC4gqtdf/delicious-logo.png"></Image>
          </DrawerHeader>
        <DrawerBody>
          <Box p='9px' h="77%" mt='27%' bg='white' color='grey'>
            <Heading fontSize='22px' color='black' fontWeight="semibold">Sign In/Sign Up</Heading>
            <Input onChange={(e)=>handleMobile(e)} pb="7px" placeholder='Enter Mobile No' 
            _placeholder={{color: 'grey',fontSize:"15px" }} 
            variant='unstyled' pl="5px" size='lg' mt='33px' color="black"/>
          <hr color="grey"></hr>
          <Button onClick={()=>handleLogin()} display={display0} disabled={disabled} mb='16px' w='100%' h="44px" bg={bg} _hover={{'bg':bg,cursor:'pointer'}} mt='22px' color='white'>
                Proceed Via OTP
          </Button>
          <Alert display={display2}  status='info' mt='5px' mb='5px'>
          <AlertIcon  />
              An OTP is send to your mobile number.
          </Alert>
          <Input display={display1} onChange={(e)=>handleOTP(e)} pb="7px" value={OTP} placeholder='Enter OTP' 
            _placeholder={{color: 'grey',fontSize:"15px" }}  pt='5%'
            variant='unstyled' pl="5px" 
            size='lg' mt='px' color='black' />
          <hr style={{display:display1}} color="grey"></hr>
          <Alert display={display3}  status='error' mt='5px' mb='5px'>
          <AlertIcon  />
              Invalid OTP! Enter the Correct OTP. 
          </Alert>
          <Button display={display4} onClick={()=>handleLoginOTP()} disabled={disabled} mb='16px' w='100%' h="44px" bg={'red'} _hover={{'bg':'red',cursor:'pointer'}} mt='22px' color='white'>
                Confirm OTP
          </Button>
          <Alert display={display5}  status='success' mt='5px' mb='5px'>
          <AlertIcon  />
              LOGIN SUCCESSFULL...! 
          </Alert>
          <Button display={display6} onClick={onClose} disabled={disabled} mb='16px' w='100%' h="44px" bg={'green'} _hover={{'bg':'yellowgreen',cursor:'pointer'}} mt='22px' color='white'>
                Enter
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