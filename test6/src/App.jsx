import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import {setProducts} from "./store";
import Merge from './Merge';

const App = () =>{
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data.slice(0, 20)));
    };
    fetchProducts();
  },[dispatch]);
  return (
    <div>
    <h1>App Component</h1>
    <Merge/>
    </div>
  )
}

export default App
