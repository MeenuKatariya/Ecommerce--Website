import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../Home'
import { Login } from './Login'
import { CheckOut } from '../CheckOut'
import {Grocery} from '../Grocery'
import {Pharmacy} from "../Pharmacy"
import NotFound from './NotFound'
import { Cart } from '../Cart'
import { IndividualItem } from './IndividualItem'


export const Pages = () => {

   


  
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/grocery"  element={<Grocery/>}/>
        <Route path="/pharmacy"  element={<Pharmacy/>}/>
        <Route path="/product/:productId"  element={<IndividualItem/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/checkout"  element={<CheckOut/>}/>
        
        <Route path="*"  element={<NotFound/>}/>
       </Routes>  
    </div>
  )
}
