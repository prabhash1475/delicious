import React from 'react'
import {Routes ,Route } from "react-router-dom"
import Home from '../ProductFishPage/Home'  
import ProductFish from '../ProductFishPage/ProductFish'

const AllRoutes = () => {
  return (
    <div>
     <Home/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/product" element={<ProductFish/>}> </Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
