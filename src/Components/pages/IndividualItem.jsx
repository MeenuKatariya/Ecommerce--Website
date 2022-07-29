import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from '@mui/material';
import { Button } from "@mui/material"






export  const IndividualItem=()=> {
   const {id} =useParams()
    const [data,setData]=React.useState([])

    const fetchData = async() => {
        try {
          let result = await fetch(
            `http://localhost:8000/products/${id}`
          );
          let data = await result.json();
          setData(data);
          
          // console.log(result)
          // console.log(data);
        } catch (error) {
        
          
          console.log(error);
        }
      };


   console.log(data)
    React.useEffect(()=>{
       fetchData()
    },[])
  return (
    <div className="main" >
    {
       <div className="cardProduct" >
          <img src={data.imageBase} alt="" />
         <p>Title :{data.title}</p>
         <p>Colour :{data.color}</p>
         <p>Price :{data.price}</p>
         <p>Description :{data.description}</p>
         <p>Rating :{data.rating}</p>
         <p>hex :{data.hex}</p>

       </div>
        

        
          
        
    
    }
    </div>
  )
}




