import React, { useEffect, useState } from "react";
import classes from "../ProductDetail/ProductDetail.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../../API/endpoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true}  renderAdd={true}/>
      )}
    </Layout>
  );
}

export default ProductDetail;
