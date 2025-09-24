import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                renderAdd={true}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
