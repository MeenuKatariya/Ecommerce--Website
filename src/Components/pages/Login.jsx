import React from "react";
import { Input } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios  from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports"
import { toggleData } from "../../Reudx/Auth/Action";
export const Login=()=>{
    const navigate=useNavigate()
   const dispatch=useDispatch()

    const [loginData,setLoginData]=React.useState({
        email:"",
        password:""
    })

    const handleChange=(el)=>{
const {name,value}=el.target;
setLoginData(prev=>({...prev,[name]:value}))

    }
    const fetchData=async()=>{
        try{
        let res=fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loginData)
        })
        let response=await res.json 
        return response;
    
    } catch(error)
    {
    console.log(error)
    }
}
    
    const handleLogin=()=>{

       
       fetchData(loginData).then((res=>{
            // dispatch(loginSuccess(res))
            dispatch(toggleData())
            navigate("/")
        }))

    }
    return(
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     {
        Object.keys(loginData).map((el)=><TextField id={el} value={loginData[el]} name={el} onChange={handleChange} label={el.toLocaleUpperCase()} variant="standard" />)
     }
     <Button   onClick={handleLogin} variant="contained">Login</Button>

    </Box>
    )
}


