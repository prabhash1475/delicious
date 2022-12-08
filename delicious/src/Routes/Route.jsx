import React from 'react'
import {Routes ,Route } from "react-router-dom"
// import Home from '../DurgeshProduct/ProductFishPage/Home'   
import Home from "../Components/Home"
import ProductFish from "../DurgeshProduct/ProductFishPage/ProductFish" 
import { Cart } from '../CartComponent/Cart'
import {SingleComponents} from "../DurgeshProduct/ProductFishPage/ProductComponents/SingleComponents"

const AllRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/product" element={<ProductFish/>}> </Route>
        <Route path="/product/:id" element={<SingleComponents/>}> </Route>
        <Route path="/cart" element={<Cart/>}> </Route>
        
      </Routes>
    </div>
  )
}

export default AllRoutes
