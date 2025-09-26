import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
  
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);
  

  useEffect(() => {
    if (!user) {
      navigate("/signup", { state: { msg, redirect } });
    }
  }, [user]);
  return children;
};

export default ProtectedRoute;
