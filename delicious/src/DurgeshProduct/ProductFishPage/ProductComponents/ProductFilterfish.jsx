import React,{useState}from 'react' 
import { Image , Text , Flex,Box , Heading ,Spacer , Button ,Center, ButtonGroup , Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react'
import "../ProductFish.css"
import {ChevronDownIcon } from "@chakra-ui/icons"
import {ProductCartButton} from "./ProductCartButton" 
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const ProductFilterfish = ({src , text , getAllData ,allProductData , check}) => {
  let style = {
      display:"flex" , 
      alignItems: "center" , 
      cursor:"pointer" ,
      marginRight:"30px" , 
     color:"#4B4F54" , 
     width: "auto" , 
     height: "100%"  , 
    
    }
   
    const [searchParams , setSearchParams] = useSearchParams()
    const [defaultcategory , setCategory] = useState([])
    const [manage , setManage ] = useState(searchParams.getAll('type'))
      
  //  console.log(searchParams.getAll("type"))
       
     
   

   const handleChange = (check)=>{
    let newCategory = [...defaultcategory]
     if(check.toLowerCase() === "all"){
      setManage([])
       getAllData()
     }
    //  else if(newCategory.includes(check)){
    //      newCategory.splice(newCategory.indexOf(check),1)
    //  } 
     else{
      
       newCategory.push(check)
     }
    // setCategory(newCategory)
    setManage(newCategory)
   
   }
    // console.log(manage)

   useEffect(()=>{
      const params = {} 
      manage && (params.type = manage)
      setSearchParams(params)

  //  console.log('yes')
   },[ manage ])


    


  return (
    <div className='productFilterHover' style={style} onClick={()=>handleChange(check)}>
      
      <Image
  borderRadius='full'
  boxSize='32px'
  src={src}
  alt='Dan Abramov'/>
  <Text fontWeight={600} fontSize="15px" ml="6px">{text}</Text>
  
 
    </div>
  )
}

const ProductSelectfish =()=>{
  //  FOR BONE AN WITHOUT BONE 
  const [searchParamsBone ,setSearchParamsBone] = useSearchParams()
  const [myManage , setMyManage] = useState(searchParamsBone.getAll('bone') || [])

  // FILTER FOR SIZES 
  const [searchParamsSize ,setSearchParamsSize] = useSearchParams()
  const [mySize , setMySize] = useState(searchParamsSize.getAll('size') || [])

  // FILTER FOR COOKING TYPES 
  const [searchParamsSuit ,setSearchParamsSuit] = useSearchParams()
  const [mySuit , setMySuit] = useState(searchParamsSuit.getAll('suited') || [])

  //  sort FOR PRICES HIGH TO LOW AND LOW TO HIGH -----------------------> 
  const [searchParamsSort ,setSearchParamsSort] = useSearchParams()
  const [sortBy , setSortBy ] = useState(searchParamsSort.get("sortBy") || [])


 
   const handleChange = (e) =>{
      let item = e.target.value 
      // console.log(item)
      if(item == "all"){
        setMyManage([]) ; 
        setMySize([]) ; 
        setMySuit([]) ; 
        setSortBy([]) ; 
      }
        

     else if(item == "withoutBone" || item == "withbone" ){
     let newCategory = [...myManage] 
     if(newCategory.includes(item)){}  /*logic--->    newCategory.splice(newCategory.indexOf(item),1)*/

     else{
      newCategory.push(item)
     }
     setMyManage(newCategory)
      }
      else if (item == "small" || item == "medium" || item == "large"){
        let newCategory = [...mySize] 
        if(newCategory.includes(item)){}  /*logic--->    newCategory.splice(newCategory.indexOf(item),1)*/
   
        else{
         newCategory.push(item)
        }
        setMySize(newCategory)
      }
      else{
        let newCategory = [...mySuit] 
        if(newCategory.includes(item)){}  /*logic--->    newCategory.splice(newCategory.indexOf(item),1)*/
   
        else{
         newCategory.push(item)
        }
        setMySuit(newCategory)

      }

    }  


    const handleSort = (e)=>{
       setSortBy(e.target.value)

    }
    // console.log(sortBy)

    useEffect(()=>{
       const params = {} 
       // const params = {}
       
       myManage && (params.bone = myManage) 
       mySize  && (params.size = mySize)
       mySuit && (params.suited = mySuit) 
       sortBy && (params.sortBy = sortBy)
  
       setSearchParamsBone(params)
       setSearchParamsSize(params)
       setSearchParamsSuit(params)
       setSearchParamsSort(params)
    },[myManage ,mySize, mySuit,sortBy ])


  //  console.log("manage" , mySize)


  //  useEffect(()=>{
  //   const params = {} 
  //   mySize  && (params.size = mySize)
  //   setSearchParamsSize(params)
  //  },[mySize])

     
 return (
 <Flex style={{ border:"2px   red" , height:"10vh" , alignItems:"center",justifyContent:"space-between"}}> 
 <Box display="flex">
 {/*  IST MENU --------------------------------------------- */}
 <div style={{marginRight:"15px"}}>
 <Menu  >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#4B4F54" border="2px solid #eef0f3" background="#ffffff" fontWeight="800" >
    Bone Type
  </MenuButton>
  <MenuList>
  <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="withbone" onClick={handleChange}> With Bone</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="withoutBone" onClick={handleChange}>Without Bone</MenuItem>
    
  </MenuList>
</Menu>
</div>
{/* {second  menu ------------------------------------------------------------------} */}
<div style={{marginRight:"15px"}}>
<Menu >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#4B4F54" border="2px solid #eef0f3" background="#ffffff" fontWeight="800">
    Pack Size
  </MenuButton>
  <MenuList>
  <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="large" onClick={handleChange}>Large</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="medium" onClick={handleChange}>Medium</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="small" onClick={handleChange}>Small</MenuItem>

  </MenuList>
</Menu>
</div>
{/* THIRD MENU ------------------------------------------------------------------- */}
<div style={{marginRight:"15px"}}>
<Menu >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#4B4F54" border="2px solid #eef0f3" background="#ffffff" fontWeight="800">
    Best Suited For 
  </MenuButton>
  <MenuList>
  <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="grill" onClick={handleChange}>Grill</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="deepfry" onClick={handleChange}>Deep Fry</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="roast" onClick={handleChange}>Roast</MenuItem>
    
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="curry" onClick={handleChange}>Curry</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="biryani" onClick={handleChange}>Biryani</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="bake" onClick={handleChange}>Bake</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="panFry" onClick={handleChange}>Pan Fry</MenuItem>


    
  </MenuList>
</Menu>
</div>
</Box>

{/*  SORTING DIV IS STARTED FROM HERE */}
<Box>
<Menu  >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#4B4F54" border="2px solid #eef0f3" background="#ffffff" fontWeight="800" >
    Sort According to Price
  </MenuButton>
  <MenuList>
  <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="asc" onClick={handleSort}> Price Low to High</MenuItem>
    <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="desc" onClick={handleSort}>Price High to Low</MenuItem>
    
  </MenuList>
</Menu>
</Box>



</Flex>
)

}


//  DATA IS HERE ------------------------------------------------------------------------------->

const ProductMainData = ({src , name , weight ,price , des ,id , item})=>{
  //  console.log(item)
    let style = {
     
      borderRadius:"12px", 
      position:"relative" , 
    }

      
 return (
    <Box shadow="2xl" w={{base:"90vw", sm: "55vw", md: "43.5vw", lg: "25vw" ,xl: "25vw",'2xl': "25vw",}} h={{base:"434px", sm: "65vh", md: "74vh", lg: "415px" ,xl: "459px",'2xl': "459px",}} style={style}  >
      
      <Link to={`/product/${item.id}`} key={item.id} >
       <div id='productDataImages' style={{ height:"auto"}}>
        <img src={src} alt={name}/>
       </div>
       </Link>
       
       <div id='productDataDesc' style={{border:"2px  #EBECEE" ,height:"35%" , padding:"10px 10px 10px 10px"}}>
         <Heading fontSize="15px" fontWeight="600" color="#4A4A54">{name}</Heading>
         <Text fontSize='14px' fontWeight="500" color="#727272" overflow="hidden" mt={3} mb={3}>{des}</Text>
          <Heading fontSize='14px' fontWeight="500" color="#4A4A54" mt={3} mb={3}>{weight}</Heading>
           
           {/* main div of mrp price ------------------------ */}
           <Box id='productDescDisplayFlex' w={{base:"84vw", sm: "50vw", md: "40.5vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} style={{display:"flex", border:"2px  red" , justifyContent:"space-between", alignItems:"center" ,position:"absolute" }} bottom={{base:"22px", sm: "25px", md: "25px", lg: "25px" ,xl: "22px",'2xl': "25px",}}>
            
            <div><Heading fontSize='17px' fontWeight="600" color="#D11243">MRP:{price}</Heading></div>
            <div>
              <ProductCartButton item={item} />
            </div>
            
           </Box>
            
       </div>
       {/* <div style={{display:"flex" , justifyContent:"center" , alignItems:"center", marginTop:"7px" ,fontWeight:"600" , border:"2px solid red" , position:"sticky" , paddingBottom:"0px"}}> 
        
        <div> <img src="https://www.licious.in/img/rebranding/express_delivery.svg" alt="" /></div>
         <Text ml="4px" fontSize="14px" color="#aeaeae" >Today in 90 min</Text>
         
         
       </div> */}
    </Box>
 )
}


//  RESPONSIVE COMPONENTS ------------------------------------------------------------------------>
const ResponsiveFilterFish = ({data , getAllData})=>{
  // const [manage , setManage ] = useState([])
  
  const [searchParams , setSearchParams] = useSearchParams()
  const [defaultcategory , setCategory] = useState(searchParams.getAll('type') || [])
 

  //  NEW FILTER PROPERTY
  const [searchParamsBone ,setSearchParamsBone] = useSearchParams()
  const [myManage , setMyManage] = useState(searchParamsBone.getAll('bone') || [])

  // FILTER FOR SIZES 
  const [searchParamsSize ,setSearchParamsSize] = useSearchParams()
  const [mySize , setMySize] = useState(searchParamsSize.getAll('size') || [])

  // FILTER FOR COOKING TYPES 
  const [searchParamsSuit ,setSearchParamsSuit] = useSearchParams()
  const [mySuit , setMySuit] = useState(searchParamsSuit.getAll('suited') || [])
  
  
   

   const handleClick = (check)=>{
    let newCategory = [...defaultcategory]
     if(check.toLowerCase() === "all"){
      setCategory([])
      newCategory=[]
      getAllData()
      // console.log(defaultcategory)
    }
    else if(newCategory.includes(check)){
       //  newCategory.splice(newCategory.indexOf(check),1)
     } 
     else{
       newCategory.push(check)
      }
      setCategory(newCategory)
      // setManage(newCategory)
    }
    
    const handleChange = (e) =>{
      let item = e.target.value 
      // console.log(item)
      if(item == "all"){
        setMyManage([]) ; 
        setMySize([]) ; 
        setMySuit([]) ;
       }

     else if(item == "withoutBone" || item == "withbone" ){
     let newCategory = [...myManage] 
     if(newCategory.includes(item)){}  /*logic--->    newCategory.splice(newCategory.indexOf(item),1)*/

     else{
      newCategory.push(item)
     }
     setMyManage(newCategory)
      }
      else if (item == "small" || item == "medium" || item == "large"){
        let newCategory = [...mySize] 
        if(newCategory.includes(item)){}  /*logic--->    newCategory.splice(newCategory.indexOf(item),1)*/
   
        else{
         newCategory.push(item)
        }
        setMySize(newCategory)
      }
      else{
        let newCategory = [...mySuit] 
        if(newCategory.includes(item)){}  /*logic--->    newCategory.splice(newCategory.indexOf(item),1)*/
   
        else{
         newCategory.push(item)
        }
        setMySuit(newCategory)

      }

    } 
     
    
    useEffect(()=>{
      const params = {} 
      defaultcategory && (params.type = defaultcategory) 
      
      setSearchParams(params)

    },[defaultcategory])

      
    useEffect(()=>{
      const params = {} 
      // const params = {}
      
      myManage && (params.bone = myManage) 
      mySize  && (params.size = mySize)
      mySuit && (params.suited = mySuit)
 
      setSearchParamsBone(params)
      setSearchParamsSize(params)
      setSearchParamsSuit(params)
   },[myManage ,mySize, mySuit])

      
   




  const responsiveSecondMenuSelect = {
    fontSize:"15px" ,color:"#4B4F54" , fontWeight:"800" ,
  }
  
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' id='responsiveFlexFilter'>
  <Box p=''>
    <Heading className='displayBlockProduct' size={{sm: 'sm',md: 'md',lg: 'md',xl: 'lg','2xl': '96em',}} color="#585858" >Categories : </Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap="2">
    {/* FIRST BUTTON ------------------------------------------------------>     */}
  <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#585858" border="1px solid #ff0040">
    Filter by type
  </MenuButton>
  
  <MenuList>
    {data.map((item)=>{
      return (
        <MenuItem minH='40px' key={item.id} onClick={()=>handleClick(item.check)}>
        <Image
          boxSize='2rem'
          borderRadius='full'
          src={item.src}
          alt={item.text}
          mr='12px'
        />
        <span style={{fontSize:"17px" ,color:"#4B4F54" , fontWeight:"800"}}>{item.text}</span>
      </MenuItem>
      )
    })}
  </MenuList>
</Menu>

{/*  SECOND BUTTON ------------------------------------------ */}

<Menu  >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#585858" border="1px solid #ff0040" fontWeight="800">
   Select
  </MenuButton>

  <MenuList >
    {/* <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato'> */}
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginLeft="5px" width={{base:"90px"}}>
         Bones 
        </MenuButton>
        <MenuList >
        <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>

          <MenuItem style={responsiveSecondMenuSelect} value="withbone" onClick={handleChange}>with bone</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect} value="withoutBone" onClick={handleChange}>without bone</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginLeft="5px" width={{base:"80px"}}>
         Size 
        </MenuButton>
        <MenuList >
        <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>

          <MenuItem style={responsiveSecondMenuSelect} value="large" onClick={handleChange}>Large</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect} value="medium" onClick={handleChange}>Medium</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect} value="small" onClick={handleChange}>Small</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginLeft="5px" width={{base:"90px"}}>
         Suited  
        </MenuButton>
        <MenuList >
        <MenuItem fontSize="15px" color="#4B4F54" fontWeight="800" fontFamily='Lato' value="all" onClick={handleChange}>All</MenuItem>

          <MenuItem style={responsiveSecondMenuSelect} value="grill" onClick={handleChange}>Grill</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect} value="deepfry" onClick={handleChange}>Deep Fry</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect} value="roast" onClick={handleChange}>Roast</MenuItem>

          <MenuItem style={responsiveSecondMenuSelect} value="curry" onClick={handleChange}>Curry</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect}value="biryani" onClick={handleChange}>Biryani</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect} value="bake" onClick={handleChange} >Bake</MenuItem>
          <MenuItem style={responsiveSecondMenuSelect}value="panFry" onClick={handleChange}>Pan Fry</MenuItem>
        </MenuList>
      </Menu>
  </MenuList> 
  


      
    
    
</Menu>

  </ButtonGroup>
</Flex>

  )
  
}

export {ResponsiveFilterFish , ProductFilterfish , ProductSelectfish , ProductMainData}