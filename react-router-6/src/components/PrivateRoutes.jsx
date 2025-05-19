import { Navigate, Outlet } from "react-router-dom";
import React, { useState } from "react";

export const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(true);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
