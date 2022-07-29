import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../Home'
import { Login } from './Login'
import { Private } from '../Private'
import {Grocery} from '../Grocery'
import {Pharmacy} from "../Pharmacy"
import NotFound from './NotFound'
import { getCart, getUser, getUserCart } from '../../Reudx/Cart/action'
import { useDispatch } from 'react-redux/es/exports'
import { IndividualItem } from './IndividualItem'
import { errorCart, loadingCart } from '../../Reudx/Cart/action'
export const Pages = () => {
  const dispatch=useDispatch()
  const [userData,setUserData] =React.useState([])
  
   


  React.useEffect(()=>{
   dispatch(getUserCart())
  },[])
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/grocery"  element={<Grocery/>}/>
        <Route path="/pharmacy"  element={<Pharmacy/>}/>
        <Route path="/product/:productId"  element={<IndividualItem/>}/>
        <Route path="*"  element={<NotFound/>}/>
       </Routes>  
    </div>
  )
}
