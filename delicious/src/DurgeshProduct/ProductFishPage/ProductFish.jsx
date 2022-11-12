import Nav from "./Navbar/Nav" 
import React from 'react'
// import {shallowEqual, useDispatch ,useSelector} from "react-redux"
import { useEffect } from "react"
// import { getProductFishDataReq , getProductFishDataFailure , getProductFishDataSuccess } from "../FishProductRedux/action"
import axios from "axios"
import ProductSkeleton from "./ProductComponents/ProductSkeleton"

import "./ProductFish.css"
// import ProductFilterfish from "./Components/ProductFilterfish" 
import ProductHeadings from "./ProductComponents/ProductHeadings" 
import {ResponsiveFilterFish ,ProductFilterfish ,ProductSelectfish ,ProductMainData} from "./ProductComponents/ProductFilterfish" 
import { SimpleGrid , Text} from "@chakra-ui/react"
// import { DragHandleIcon } from "@chakra-ui/icons"
import { useLocation, useSearchParams } from "react-router-dom"
import { useState } from "react" 
// import Navbar from ""
 


const ProductFish = () => {
 const arr = new Array(10).fill(0)
// const dispatch = useDispatch() 
 const [searchParams] = useSearchParams() 
 const [searchParamsBone] = useSearchParams() 
 const [searchParamsSize] = useSearchParams()
 const [searchParamsSuit] = useSearchParams()
 const [searchParamsSort] = useSearchParams()

 const location = useLocation() 
 //  console.log(location)

//   arrays for getting the data       

const [allProductData , setAllProductData] = useState([])
const [dataIsLoading , setDataIsLoading] = useState(false)   



// const {allProductData ,dataIsLoading ,dataIsError } = useSelector((state)=>{
//  return {
//   allProductData:state.allProductData , 
//   dataIsLoading:state.dataIsLoading ,
//   dataIsError:state.dataIsError , 
//  }
// },shallowEqual)




 const getAllData = (queryParams) =>{
    // console.log(queryParams)
        //  dispatch(getProductFishDataReq())
        setDataIsLoading(true)
         setTimeout(()=>{
          axios.get('https://tan-real-buffalo.cyclic.app/Fish&SeaFood',queryParams )
          .then((res)=>  setAllProductData(res.data) , setDataIsLoading(false))
          .catch(()=> alert('Something Went Wrong Refresh The Data') ,setDataIsLoading(false) )
         },100)
        
        
  }
 
  console.log(dataIsLoading)

  useEffect(()=>{
    if(location || allProductData.length == 0){
      const type = searchParams.getAll("type") 
      const bone = searchParamsBone.getAll("bone") 
      const size = searchParamsSize.getAll("size")
      const suited = searchParamsSuit.getAll("suited")
      // const sortBy = searchParamsSort.get("sortBy")

      const queryParams = {
        params:{
          type:type  ,
          bone:bone  ,
          size:size ,
          suited:suited , 
          _sort: searchParamsSort.get("sortBy") && "price" ,
          _order: searchParamsSort.get("sortBy")
        } ,
      };
      getAllData(queryParams)
    }
    
  },[location.search])
  
  

 
  let ProductFilterfishData = [
    {id:"1" ,
    src:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3e466619-abc2-c017-5140-788c2c90719b/original/FIsh.png" , 
    text:"All" , 
    check:"all" , 
    },
    {id:"2" ,
    src:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d1aa6e6-2f69-131a-9938-77231e7c0c2a/original/Fresh-water.png" , 
    text:"Freshwater" , 
    check:"Freshwater" , 
    },
    {id:"3" ,
    src:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/845dab73-6bc9-84a5-df80-057378225fd5/original/seawater.png" , 
    text:"Seawater" ,
    check:"Seawater" ,  
    },
    {id:"4" ,
    src:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c17b68d2-aa90-d266-04fe-f63bea8ae982/original/AMritsari.png" , 
    text:"Ready to Cook" , 
    check:"Readytocook" , 
    },
    {id:"5" ,
    src:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/20aecfba-a0bb-fcd7-b72a-6be55c4a50dd/original/Shell.png" , 
    text:"Crab" , 
    check:"crab" , 
  }

  ]
   
  // if(dataIsLoading){
  //   return <h1>...Loading</h1>
  // }
    let style ={
      background:"#f7f6f6"
    }
  return (
    <div style={style}>
        {/* <Navbar /> */} 

      
      <div id="bodyProductPage">
        {/* ALL DATA SAME -------------->               ------------------------------------ */}

      {/*  IMPORTED FROM PRODUCTS HEADING PASS THE DATA  */}
        <ProductHeadings productPageName="Fish & Seafood "/>
        
        {/*  MAIN FILTER DATA --------------------- IMPORTED FROM PRODUCT FILTER FISH----->          */}
        <div id="productFilterFish">
         {
          ProductFilterfishData.map((item)=>{
            return (
              <ProductFilterfish key={item.id} src={item.src} text={item.text} getAllData={getAllData} allProductData={allProductData} check={item.check}/>
            )
          })
         }
        </div>
        <div id="ResponsiveFilterFishMain">
          <ResponsiveFilterFish data={ProductFilterfishData} getAllData={getAllData} />
        </div>

         <hr  className="horizontalRule" />
         
         {/* SELECT FILTER DATA  */} 
         <div id="productSelectFish" style={{}}>
          <ProductSelectfish />
         </div>

         {/*   MAIN DATA IS COMING HERE -------------------------------------------->------- */}
        
          <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} justifyItems="center" spacingY={{base:"32px", sm: "34px", md: "34px", lg: "34px",xl: "34px",'2xl': "32px",}} >
            {dataIsLoading && arr.map((_,id)=>{
              return (<ProductSkeleton key={id}/>)
            })}
            {allProductData.length > 0 && allProductData.map((item)=>{
              return (
                <ProductMainData key={item.id} src={item.imgUrl} name={item.name} weight={item.weight} price={item.price} des={item.des} />
              )
            })}

            
           
          </SimpleGrid>


          
      
      </div>
    </div>
  )
}

export default ProductFish
