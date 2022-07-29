import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from '@mui/material';
import { Button } from "@mui/material"
import {Box} from "@mui/material"
import {useSelector} from "react-redux"
import { ContactSupportOutlined } from '@mui/icons-material';
import {useDispatch} from "react-redux"
import { addInCart, addtoCart, errorCart, loadingCart } from '../../Reudx/Cart/action';
import axios from 'axios';
import { addScaleCorrector } from 'framer-motion';



export  const IndividualItem=()=> {
   const {productId} =useParams()
    const [data,setData]=React.useState({})
   const cart=useSelector(state=>state.cart.cart)
   const dispatch=useDispatch

   const isItemInCart=()=>{
   const el=cart.find(el=>el.id==productId)
  //  console.log(el);
    return !!el
   }



    const fetchData = async() => {
        try {
          let result = await fetch(
            `http://localhost:8000/products/${productId}`
          );
          let data = await result.json();
          setData(data);
          
          // console.log(result)
          // console.log(data);
        } catch (error) {
        
          
          console.log(error);
        }
      };


      

    const handleAddToCart=()=>{
      dispatch(addInCart(data))
    }

  
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
        
        { 
           !isItemInCart() &&
            <Button onClick={handleAddToCart}   size="small">Add To Cart</Button>}
         <Box>
         {
          isItemInCart()   && <>  
         <Button color="success" variant="contained" size="small">+</Button>
         <Button color="success" variant="contained" size="small">+</Button>
         <Button color="success" variant="contained" size="small">-</Button>
         </>
         }
         </Box>
       </div>
        

        
          
        
    
    }
    </div>
  )
}




