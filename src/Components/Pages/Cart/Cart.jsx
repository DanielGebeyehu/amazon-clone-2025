import React, { useContext } from "react";
import classes from "../Cart/Cart.module.css";
import Layout from "../../Layout/Layout";
import ProductCard from "../../Product/ProductCard";
import { DataContext } from "../../DataProvider/DataProvider";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(basket);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
        </div>
        {basket?.length != 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments"> Continue to Checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
