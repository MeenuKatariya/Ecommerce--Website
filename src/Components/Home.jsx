import React from 'react'
import { useSelector } from 'react-redux'
import ShowData from "./ShowData"
import { Button } from '@chakra-ui/react'
export const Home = () => {
  const [products,setProducts]=React.useState([])
  const token=useSelector(state=>state.auth.toggle)
    
  const fetchData=async()=>{
    try{
      let result= await fetch(`http://localhost:8000/products`)
      let data=await result.json();
      setProducts(data)
      console.log(result)
      console.log(data)
      

    
  
    }catch(error){
      console.log(error)
    }
  }
  fetchData()
  
  

  return (
    <div>{
      products?.map((el)=>{
           ShowData(el)
     })
            }
            {
              token? <Button>Log out</Button>: null

            }

    </div>
  )
}
