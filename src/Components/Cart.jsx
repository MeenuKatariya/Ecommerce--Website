import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

export const Cart = () => {
  const [data, setData] = React.useState([]);
  let { productId } = useParams();
  let total = 0
  
  const [cartItem,setCartItem]=React.useState(false)

  const fetchData = async (id) => {
    try {
      let result = await fetch(`http://localhost:8000/cartItems`);
      let data = await result.json();
      
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

  console.log(data)

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cartMain">
      {data.map((el, productId) => {
        total += el.price * el.quantity;
        return (
          <div className="cartIndividual">
            
              

              <div className="title">
                <p>Title : {el.title}</p>

                <p>Quantity:{el.quantity}</p>
                <p>Price :{el.price}</p>
                <p>Amount : {+el.price * el.quantity}</p>
                </div>
                
               

              <div>
              <Button
                  color="success"
                  variant="contained"
                  size="small"
                  onClick={() => {
                    deleteCartItem(el.id);
                  }}
                >
                  Delete
                </Button>
              </div>
          
            
          </div>
        );
      })}
      <div style={{marginLeft:"500px",width:400,display:"flex", justifyContent:"space-around"}}>
        <Button color="success" variant="contained" size="small">
          Total : {total}
        </Button>

        <Button color="success"  variant="contained" size="small">
         Check Out
        </Button>
      </div> 
    
    </div>
  );
};
