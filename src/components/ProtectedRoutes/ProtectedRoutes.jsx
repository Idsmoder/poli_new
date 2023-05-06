import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" />;
  }else{
    return <Navigate to="/patient" />;
  }
  
};

export default ProtectedRoutes;
