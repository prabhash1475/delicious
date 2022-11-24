import React from 'react'
import "../ProductFish.css"
import {ChevronRightIcon } from "@chakra-ui/icons" 
import { Text , Image, Heading} from "@chakra-ui/react" 
import { Link } from "react-router-dom"

const ProductHeadings = ({productPageName ,anotherPage }) => {
  return (
    <div> 
      <div className="productNavigationBar">
        <Link to="/"><Text fontSize='15px' className="HomeHover" fontWeight="600">Home</Text></Link>
          <ChevronRightIcon w={6} h={6} color="grey" /> 
          <Link to="/product"><Text fontSize='15px' color="#ff0040" fontWeight="700">{productPageName}</Text></Link>
        </div>
        
        <Heading fontSize='25px' fontWeight="600" color="#585858" mt="12px" mb="8px">{anotherPage}</Heading>
        <hr className="horizontalRule" />
        
    </div>
  )
}

export default ProductHeadings
