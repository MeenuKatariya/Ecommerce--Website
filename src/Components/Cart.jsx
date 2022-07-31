import React from "react";
import { Button } from "@mui/material";
import { useParams } from 'react-router-dom';

export const Cart = () => {
  const [data, setData] = React.useState([]);
  let {productId} = useParams();
  let total=0;

  const fetchData = async () => {
    try {
      let result = await fetch(`http://localhost:8000/cartItems`);
      let data = await result.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (productId) => {
    try {
      await fetch(`http://localhost:8000/cartItems/${productId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cartMain">
      {data.map((el) => {
        total+=el.price*el.quantity
        return (
          <div className="cartIndividual">
           
           <div className="imgTitle" >
           <div className="cartImage">
           {/* <img src={el.imageBase} alt="" /> */}
           </div>
          
          <div className="title">
          <p>Title : {el.title}</p>
            {/* <p>Colour :{el.color}</p> */}
            <p>Quantity:{el.quantity}</p>
            <p>Price :{el.price}</p>
            {/* <p>Description :{el.description}</p> */}
            <p>Rating :{el.rating}</p>
             <p>Amount : {+el.price * el.quantity}</p>
            <Button
              color="success"
              variant="contained"
              size="small"
              onClick={deleteCartItem}
            >
              Delete
            </Button>
          </div>
          </div>
           
         

           


          </div>
        );
      })}
      <div>
      <Button
              color="success"
              variant="contained"
              size="small"
              onClick={deleteCartItem}
            >
              Total :  {total}
            </Button>
      </div>
    </div>
  );
};
