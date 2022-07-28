import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
export const Private = ({childen}) => {
    const token=useSelector(state=>state.auth.toggle)
     if(!token){
       return <Navigate to="/login"/>
     }
    return childen
   
  
}
