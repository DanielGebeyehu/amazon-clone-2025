import React, { useContext, useState } from "react";
import classes from "../Payment/Payment.module.css";
import Layout from "../../Layout/Layout";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";

// import { className } from "../../../../functions/node_modules/@sinonjs/commons/types/index.d";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (e) => {
    console.log(e);
    e?.errors?.message ? setCardError(e?.errors?.message) : setCardError("");
  };

  return (
    <Layout>
      {/* {header} */}
      <div className={classes.payment__header}>Checkout({totalItem}) items</div>
      {/* Payment method */}
      <section className={classes.payment}>
        {/* {adress} */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email || "sample@gmail.com"}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* {product} */}
        <div className={classes.flex}>
          <h3>Review Items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* {card form} */}
        <div>
          <h3>Payment Method</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form action="">
                {cardError && <small>{cardError}</small>}
                <CardElement onChange={handleChange} />
                <div className={classes.payment__price}>
                  <div>
                    <span>
                      Total Order | <CurrencyFormat amount={total} />{" "}
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <section></section>
      </section>
    </Layout>
  );
}

export default Payment;
