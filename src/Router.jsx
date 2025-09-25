import React from "react";
import { BrowserRouter as Routerr, Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing/Landing";
import Payment from "./Components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Orders/Orders";
import Cart from "./Components/Pages/Cart/Cart";
import Auth from "./Components/Pages/Auth/Auth";
import Results from "./Components/Pages/Results/Results";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51SAM21QzVoa9b3jrONvj94jYJwGxA5oddyKZt986BxLv69uGrm8qFa8Pqfx5ho846Bc2XCrDvMZipOgrKO88uKMU00SefBLGpy"
);
function Router() {
  return (
    <Routerr>
      <Routes>
        <Route path="/" element={<Landing />} />
       
        <Route
          path="/payments"
          element={
            <Elements stripe = {stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/"></Route>
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </Routerr>
  );
}

export default Router;
