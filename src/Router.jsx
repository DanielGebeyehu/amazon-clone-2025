import React from "react";
import { BrowserRouter as Routerr, Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing/Landing";
import Payment from "./Components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Orders/Orders";
import Cart from "./Components/Pages/Cart/Cart";
import Auth from "./Components/Pages/Auth/Auth";
import Results from "./Components/Pages/Results/Results";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
function Router() {
  return (
    <Routerr>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/payments" element={<Payment />} />
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
