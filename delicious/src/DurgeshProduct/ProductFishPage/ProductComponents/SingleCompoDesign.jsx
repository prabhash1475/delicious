import React, { useEffect,useState } from 'react'
import ProductHeadings from "./ProductHeadings"
import "./SingleCompoDesign.css" 
import "../ProductFish.css"
import { Box ,Image , Text ,Heading ,Button} from '@chakra-ui/react' 
import {ProductCartButton} from "./ProductCartButton" 
import {ChevronLeftIcon ,ChevronRightIcon} from "@chakra-ui/icons" 
import { loadData, saveData } from '../../../CartComponent/Redux/utils/localStorage'
// import { useState1 } from '../../../CartComponent/Hooks'


const SingleCompoDesign = ({DisableRight,handleChangeAdd ,handleChangeRemove ,src ,name,price,type,bone,size,description ,item}) => {
  const [cartData,setcartData]=useState(loadData('cartData') || [])
  
  
  
  
  const addToCart = ()=>{
     

        setcartData([...cartData,item])
        saveData("cartData" , cartData)
      
      
    }
    
  

   


  return (
    <div style={{overflow: "hidden" ,position:"relative"}}>
    <Box id='SinglePageMain' w={{base:"80%", sm: "76%", md: "78%", lg: "90%" ,xl: "78%",'2xl': "78%",}} >
    <ProductHeadings productPageName="Fish & Seafood" anotherPage={name}   /> 

    {/* BUTTON FOR DIFFRENT PAGES IS START FROM HERE ----------------------------------------->------ */}
    {/* BUTTON LEFT---------->     --------- */}
    <Button size='lg' onClick={handleChangeRemove} disabled={DisableRight == 1}  height={{base:'67px',sm: "90px", md: "120px", lg: "90px" ,xl: "120px",'2xl': "120px",}}  width={{base:'67px',sm: "90px", md: "120px", lg: "90px" ,xl: "120px",'2xl': "120px",}} border='2px solid #eaeaea' borderColor='#eaeaea' borderRadius="50%" position="absolute" left={{base:"-35px",sm: "-42px", md: "-49px", lg: "-42px" ,xl: "-49px",'2xl': "-49px",}} top={{base:'41vh'}} display='inline-block' >  <ChevronLeftIcon w={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}} h={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}}/> </Button >

    {/* BUTTON RIGHT-------------------->----------- */}
    <Button size='lg' onClick={handleChangeAdd} disabled={DisableRight == 20}  height={{base:'67px',sm: "90px", md: "120px", lg: "90px" ,xl: "120px",'2xl': "120px",}}  width={{base:'67px',sm: "90px", md: "120px", lg: "90px" ,xl: "120px",'2xl': "120px",}} border='2px solid #eaeaea' borderColor='#eaeaea' borderRadius="50%" position="absolute" right={{base:"-35px",sm: "-42px", md: "-49px", lg: "-42px" ,xl: "-49px",'2xl': "-49px",}} top={{base:'41vh'}} display='inline-block' >  <ChevronRightIcon w={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}} h={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}} ml={{base:"-16px"}}/> </Button >


{/*  SINGLE DATA MAIN DIV ---------------------------------------------------------->    */}
     <Box id='singlePageData' shadow='2xl' w={{base:"74vw",sm: "74vw", md: "76.5vw", lg: "91vw" ,xl: "78vw",'2xl': "78vw",}} height={{base:"130vh",sm: "130vh", md: "120vh", lg: "70vh" ,xl: "70vh",'2xl': "70vh",}} margin="0px auto 0px auto" display={{base:"flex"}} justifyContent={{base:"",lg:"space-around" ,xl:"space-around" ,"2xl":"space-around"}} alignItems={{base:"center",sm: "center", md: "center", lg: "none" ,xl: "none",'2xl': "none",}} backgroundColor="" flexDirection={{base:"column",sm:"column",md:'column' ,lg:"row" ,xl: "row",'2xl': "row",}} >
       
       {/*  SINGLE DATA IMAGE -------------------------->     */}
      <Box id='singlePageImage' border="2px red" w={{base:"65vw" ,sm: "63vw", md: "64vw", lg: "40vw" ,xl: "35vw",'2xl': "35vw",}} height={{base:"42vh",sm: "45vh", md: "56vh", lg: "52vh" ,xl: "52vh",'2xl': "52vh",}} margin="20px 0px 0px 0px">
        <Image src={src} alt={name}   w={{base:"65vw" ,sm: "63vw", md: "64vw", lg: "40vw" ,xl: "35vw",'2xl': "35vw",}} height={{base:"42vh",sm: "45vh", md: "56vh", lg: "52vh" ,xl: "52vh",'2xl': "52vh",}} />
      </Box>

      {/* SINGLE DATA DIV ALL INFORMATION ---------------------------->            */}
     <Box id='singlePageInfo' border="2px  red" w={{base:"65vw" ,sm: "63vw", md: "64vw", lg: "40vw" ,xl: "36vw",'2xl': "36vw",}} height={{base:"80vh" ,sm: "65vh", md: "52vh", lg: "52vh" ,xl: "52vh",'2xl': "52vh",}} margin="20px 0px 0px 0px" position="relative">
        
      <Heading fontSize="20px" fontWeight="700" color="#000">{name}</Heading>
        <Box display="flex" fontSize="13px" color="#555" mt="13px" mb="13px" fontWeight="600">
            <Text mr="10px" >{type}</Text>
            <Text mr="10px">|</Text>
            <Text mr="10px" >{bone}</Text>
            <Text mr="10px">|</Text>
            <Text>{size}</Text>
        </Box>

        <hr style={{backgroundColor:"#EBECEE" ,margin:"13px 0px 13px 0px"}}/>
        <Text lineHeight="17px" color="#555" fontSize="14px" fontWeight="600">{description}</Text>

{/*    BUTTON STARTS FROM HERE, MAIN DIV OF BUTTON ----------------------------------------------->    */}

        <Box id='productDescDisplayFlex' w={{base:"100%"}} style={{display:"flex", border:"2px   red" , justifyContent:"space-around", alignItems:"center" ,position:"absolute" }} bottom={{base:"5px", sm: "5px", md: "10px", lg: "10px" ,xl: "10px",'2xl': "10px",}}>
            
            <div><Heading fontSize='28px' fontWeight="600" color="#D11243" >MRP: {price}</Heading></div>
            <div >
             <Button onClick={()=>addToCart()} >Add to cart</Button>
            </div>
            
        </Box>


      </Box>  

      {/*  ENDED------------------------------> BOTH DIV IMAGE AND INFO  */}
     </Box>  
   
      
    </Box>
    
    </div>

      

  )
}

export default SingleCompoDesign
