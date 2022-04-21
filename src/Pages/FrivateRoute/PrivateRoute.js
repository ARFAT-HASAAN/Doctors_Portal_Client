import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isloading } = UseAuth();
  let location = useLocation();
  if (isloading) {
    return <p> Loading.. </p>;
  }
  return (
    <>
      {user.email ? (
        children
      ) : (
        <Navigate to="/Regester" state={{ from: location }}></Navigate>
      )}
    </>
  );
};

export default PrivateRoute;
