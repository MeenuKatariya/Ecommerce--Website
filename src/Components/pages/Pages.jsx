import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../Home'
import { Login } from './Login'
import { Private } from '../Private'
export const Pages = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Private><Home/></Private>}/>
        <Route path="/login"  element={<Login/>}/>
       </Routes>  
    </div>
  )
}
