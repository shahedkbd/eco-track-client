import {  useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { role, loading } = useContext(AuthContext);

  if (loading) return <p>Checking permissions...</p>;

  if (role !== "admin") {
    return <Navigate to="/" replace />
  }
  console.log(role);
  

return children;
};

export default AdminRoute;
