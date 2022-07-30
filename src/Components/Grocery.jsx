import React from "react";
import { useSelector } from "react-redux";
import ShowData from "./ShowData";
import { Button } from "@mui/material";
import { useFetchProducts } from "../Hook/fetchProducts";
import { filter } from "@chakra-ui/react";
import {useParams}  from "react-router-dom"
import {Link} from "react-router-dom"
export const Grocery = () => {
  const [products, setProducts] = React.useState([]);
  const token = useSelector((state) => state.auth.toggle);
  const [page, setPage] = React.useState(1);
  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  
    // const {loading,error,products}  = useFetchProducts(`http://localhost:8000/products`)
  // console.log(dataShow)
// 
  
  const fetchData = async () => {
    try {
      setLoading(true);
      let result = await fetch(
        `http://localhost:8000/products?category_like=grocery&_page=${page}&_limit=6`
      );
      let data = await result.json();
      setProducts(data);
      setLoading(false);
      // console.log(result)
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  
  const handleSort = async(order) => {
    // console.log(1)
    try {
      setLoading(true)
      let result = await fetch(
        `http://localhost:8000/products?_sort=price&_order=${order}`
      );
      
      let data = await result.json();
      // console.log(data)
      setProducts(data)
      // setSort(data);
      // fetchData()

      setLoading(false)
      // console.log(result)
      // console.log(data);
    } catch (error) {
      
      setError(true)
      console.log(error);
      
    }

   
  };

  const handleFilter = async(key) => {
    // console.log(1)
    try {
      setLoading(true)
      let result = await fetch(
        `http://localhost:8000/products?rating=${key}&rating=${key}`
      );
      
      let data = await result.json();
      console.log(data)
      setProducts(data)
      // setSort(data);
      // fetchData()

      setLoading(false)
      // console.log(result)
      // console.log(data);
    } catch (error) {
      
      setError(true)
      console.log(error);
      
    }

   
  };




  React.useEffect(() => {
    fetchData()
  }, [page]);

  return loading ? (
    <h2>...loading</h2>
  ) : error ? (
    <h2>Something went wrong</h2>
  ) : (
    
    <div>
    
      <div className="sortingDiv">
        <Button
          onClick={() => handleSort("asc")}
          variant="outlined"
        >
          Asc
        </Button>
        <Button
          onClick={() => handleSort("desc")}
             variant="contained"
        >
          Desc
        </Button>
      </div>

      <div className="filterRatingDiv">
        <Button
          onClick={() =>handleFilter(4)}
          variant="outlined"
        >
          5 to 4
        </Button>
        <Button
          onClick={() =>handleFilter(3)}
             variant="contained"
        >
          4 to 3
        </Button>

        <Button
          onClick={() =>handleFilter(2)}
             variant="contained"
        >
          3 to 2
        </Button>

        <Button
          onClick={() =>handleFilter(1)}
             variant="contained"
        >
          2 to 1
        </Button>
      </div>


      <div className="main">
        {
          //
          products?.map((el,id) => {
          //  return <ShowData  title={el.title}  description={el.description}  price={el.price}  color={el.color}  imageBase={el.imageBase}  key={el.id} />
          
            
            return (
            
              <div className="cardProduct">
                <img src={el.imageBase} alt="" />
                <p>Title :{el.title}</p>
                <p>Colour :{el.color}</p>
                <p>Price :{el.price}</p>
                <p>Description :{el.description}</p>
                <p>Rating :{el.rating}</p>
                {/* <p>Category :{el.category}</p> */}
                <p>hex :{el.hex}</p>
                <Link to={`/product/${el.id}`}>
              <Button >ITEM</Button>
               </Link>
              </div>
            );
          })
        }
      </div>
      <div>
        <Button
          disabled={page == 1}
          variant="contained"
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
  
        </Button>

        <Button variant="contained">{page}</Button>
        <Button variant="contained" onClick={() => setPage((prev) => prev + 1)}>
          Next

        </Button>
      </div>
    </div>
  );
};



