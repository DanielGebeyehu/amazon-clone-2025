import React from "react";
import CategoryCard from "../Category/CategoryCard";
import { categoryInfos } from "./categoryFullInfos.js";
import classes from "./category.module.css"
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.id} />
      ))}
    </section>
  );
}

export default Category;
