import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";

export const IndividualItem = () => {
  let {productId} = useParams();
  const [singleItem, setSingleItem] = React.useState();
  const [isInCart, setIsInCart] = React.useState(false);
  const [itemFromCart, setItemFromCart] = React.useState(null);

  const fetchProduct = async(productId) => {
    try {
      let res = await fetch(`http://localhost:8000/products/${productId}`);
      let item = await res.json();
      setSingleItem(item);
    } catch (error) {
      console.log(error)
    }
  }

  const checkInCart = async (productId) => {
    try {
      let res = await fetch(`http://localhost:8000/cartItems/${productId}`);
      let item = await res.json();
      // console.log(item);
      if(item.id){
        setIsInCart(true);
        setItemFromCart(item);
      }
      else{
        setIsInCart(false);
        setItemFromCart(null);
      }
    } catch (error) {
      console.log(error)
    }
  }

const handleAddToCart = async (item) => {
  try {
    let body = item;
    body.quantity = 1;
    // console.log(body);
    await fetch(`http://localhost:8000/cartItems`, {
      method: 'POST',
      headers : { 'Content-Type' : 'application/json' },
      body : JSON.stringify(body)
    });
    setIsInCart(true);
    setItemFromCart(body);
  } catch (error) {
    console.log(error)
  }
}

const handleDEC = async() => {
  try {
    let item = itemFromCart;
    item.quantity = (item.quantity-1);
    if(item.quantity == 0){
      await fetch(`http://localhost:8000/cartItems/${productId}`, {
        method: 'DELETE',
        headers : { 'Content-Type' : 'application/json' }
      });
      checkInCart(productId);
    }
    else{
      // setItemFromCart(item);
      await fetch(`http://localhost:8000/cartItems/${productId}`, {
        method: 'PUT',
        headers : { 'Content-Type' : 'application/json' },
        body: JSON.stringify(item)
      });
      checkInCart(productId);
    }

  } catch (error) {
    console.log(error)
  }
};
const handleINC = async() => {
  try {
    let item = itemFromCart;
    item.quantity = (item.quantity+1)
    // setItemFromCart(item);
    await fetch(`http://localhost:8000/cartItems/${productId}`, {
        method: 'PUT',
        headers : { 'Content-Type' : 'application/json' },
        body: JSON.stringify(item)
      });
      checkInCart(productId);
  } catch (error) {
    console.log(error)
  }
};

  React.useEffect(()=>{
    // console.log(productId)
    if(productId){
      fetchProduct(productId);
      checkInCart(productId);
    }
  },[]);

  return <div className='main'>
      {
        singleItem ? <div className='cardProduct'>
          <img src={singleItem.imageBase} alt="" />
          <p>Title: {singleItem.title}</p>
          <p>Price : {singleItem.price}</p>
          <p>Description :{singleItem.description}</p>
          <p>Rating :{singleItem.rating}</p>
          <p>Hex :{singleItem.hex}</p>
          <Button onClick={()=>{handleAddToCart(singleItem)}} disabled={isInCart}>ADD TO CART</Button>
          {
            isInCart ? <div>
              <Button color="success" variant="contained" size="small"  onClick={handleDEC}  >-</Button>
              <span> {itemFromCart.quantity} </span>
              <Button color="success" variant="contained" size="small"  onClick={handleINC}  >+</Button>
            </div> : null
          }
        </div> : null
      }
  </div>

}