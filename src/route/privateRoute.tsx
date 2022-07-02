import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("token");

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
