import axios from "axios";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="productsWrapper">
        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
