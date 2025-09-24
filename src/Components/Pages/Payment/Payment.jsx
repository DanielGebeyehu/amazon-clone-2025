import React, { useContext } from "react";
import classes from "../Payment/Payment.module.css";
import Layout from "../../Layout/Layout";
import { DataContext } from "../../DataProvider/DataProvider";
// import { className } from "../../../../functions/node_modules/@sinonjs/commons/types/index.d";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  console.log(user);
  // const totalItem = basket?.reduce((amount, item) => {
  //   return item.amount + amount;
  // }, 0);

  return (
    <Layout>
      {/* {header} */}
      <div className={classes.payment__header}>Checkout({0}) items</div>
      {/* Payment method */}
      <section className={classes.payment}>
        {/* {adress} */}
        <div className = {classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>sample@gmail.com</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* {product} */}
        <div>
          
        </div>
        <hr />
        {/* {card form} */}
        <div></div>
        <section></section>
      </section>
    </Layout>
  );
}

export default Payment;
