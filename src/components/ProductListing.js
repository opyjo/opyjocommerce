import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actionCreators/actionCreator";
import ProductComponent from "./ProductComponent";

//The ProductListing component makes a call to the fake product API to get the products.
const ProductListing = () => {
  // This hook dispatches the action-creator(setProducts) to the store.
  const dispatch = useDispatch();

  // code fetches the product from the fake product api
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    // the dispatch function takes the action object to the store
    dispatch(setProducts(response.data));
  };

  // we use useffect to make the API immediately the pade renders.
  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="container  grid sm:grid-cols-1  gap-3 m-auto mt-10  md:grid-cols-2 lg:grid-cols-4 ">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
