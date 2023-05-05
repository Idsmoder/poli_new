import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("access_token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }else{
    return <Navigate to="/dashboard" />;
  }
  
};

export default ProtectedRoutes;
