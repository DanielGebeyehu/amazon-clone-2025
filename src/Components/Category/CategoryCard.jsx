import React from "react";
import Category from "./Category";
import classes from "./category.module.css";
import { Link } from "react-router";
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
