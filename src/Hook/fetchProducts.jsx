import React from "react";
import { useEffect,useState } from "react";

export const useFetchProducts=(url)=>{
  
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);



const getProducts=async(url)=>{
    try {
        console.log(url)
        // console.log(1)
        setLoading(true);
        let result = await fetch(url)

        let data = await result.json();
         setProducts(data);
        setLoading(false);
        // console.log(result)
        // console.log(data);
      } catch (error) {
        setLoading(false);
        setError(true);
        // console.log(error);
      }
}
 getProducts(url)

// React.useEffect(() => {
//     getProducts();
//   }, []);
   return{loading,error,products}
}