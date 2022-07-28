import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../Home'
import { Login } from './Login'
import { Private } from '../Private'
import Grocery from '../Grocery'
import Pharmacy from "../Pharmacy"
import NotFound from './NotFound'
export const Pages = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/grocery"  element={<Grocery/>}/>
        <Route path="/pharmacy"  element={<Pharmacy/>}/>
        <Route path="*"  element={<NotFound/>}/>
       </Routes>  
    </div>
  )
}
