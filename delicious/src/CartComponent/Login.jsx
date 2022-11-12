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
// import Logo from "./delicious-logo.png"
import {useDispatch} from 'react-redux'
// import deliciousLoginBgImg1 from "./deliciousLoginBgImg1.jpg"
import { login_success,login_failure,login_request } from "./Redux/Auth/action";
import { loadData, saveData } from "./Redux/utils/localStorage";
import { Link, Navigate } from "react-router-dom";

export const Login=()=>{
      let { isOpen, onOpen, onClose } = useDisclosure();
      const [size, setSize] = useState('');
      const [mobileNo, setMobileNo] = useState('');
      const [OTP, setOTP] = useState('');
      const [disabled,setDisabled]=useState(true);
      const [bg,setBg]=useState('grey');
      const [display0,setDisplay0]=useState('block');
      const [display1,setDisplay1]=useState('none');
      const [display2,setDisplay2]=useState('none');
      const [signUpData,setSignUpData]=useState(loadData("signUpData") || []);
      const [signInData,setSignInData]=useState(loadData("signInData") || [])
      const [display,setDisplay]= useState('block')

      const dispatch=useDispatch()
    
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
          setDisplay1('block')
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
                  // console.log("1")
              }else{
                  dispatch(login_success());
                  // console.log("2")
              }
              
              
          }else{

              saveData("signUpData",[...signUpData,mobileNo])
              dispatch(login_success());

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
          setDisplay2('flex');
          let flag=false;
          setTimeout(()=>{
              setDisplay2('none'); 
          },3000)
           if(OTP=='12345'){
            flag=true;
           }else{
              console.log("Invalid OTP...!")
           }
          //  {flag==true?<Navigate to='/'/>:null}
      }

    
      return (
        <>
            <Text
              onClick={(size={base:"xs",sm:"xs",md:"sm",lg:"sm"}) => handleClick(size)}
              key={size}
              m={4}
            >Login</Text>
    
    <Drawer display={display} className='LoginDrawer' onClose={onClose} isOpen={isOpen} size={{base:"xs",sm:"xs",md:"sm",lg:"sm"}}>
      <DrawerOverlay />
      <DrawerContent className='LoginDrawer' 
      style={{backgroundImage:'Url("https://thumbs.dreamstime.com/z/raw-meat-various-meats-pork-beef-rustic-background-raw-meat-various-meats-pork-beef-141854433.jpg")'}} 
      >
        <DrawerCloseButton />
        <DrawerHeader>
           <Image src="https://i.postimg.cc/xC4gqtdf/delicious-logo.png"></Image>
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