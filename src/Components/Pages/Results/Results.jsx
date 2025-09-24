import React, { useEffect, useState } from "react";
import classes from "../Results/Results.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../API/endpoints";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function Results() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {result?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
      ;
    </Layout>
  );
}

export default Results;
