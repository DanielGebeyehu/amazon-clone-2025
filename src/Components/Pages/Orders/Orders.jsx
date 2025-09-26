import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import classes from "../Orders/Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>You dont have orders yet</div>
          )}
          <div>
            {orders?.map((eachOrders, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID:{eachOrders?.id}</p>
                  {eachOrders?.data?.basket?.map((orders) => {
                    return (
                      <ProductCard
                        flex={true}
                        product={orders}
                        key={orders.id}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
