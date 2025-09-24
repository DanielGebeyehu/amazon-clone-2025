import React from "react";
import Layout from "../../Layout/Layout";
import Carousel from "../../Carouosel/CarouselEffect";
import Category from "../../Category/Category";
import Product from "../../Product/Product";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
