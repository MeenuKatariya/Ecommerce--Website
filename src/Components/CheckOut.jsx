import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux/es/exports';
export const  CheckOut=()=> {
  const token = useSelector((state) => state.auth.toggle);
  return (
    
      token? ( <div style={{margin:"auto",width:500}}>
      <div  style={{margin:"auto"}} >
       <img src="https://shots.codepen.io/warrendunlop/pen/YmVKzm-800.jpg?version=1564501659" alt="" />
      </div>
      <div>
       
      </div>

</div>) :<p style={{textAlign:"center"}} >Please Login First</p>
    

  )
}
