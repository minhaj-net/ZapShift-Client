import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ chidren }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname}></Navigate>;
  }
  return chidren;
};

export default PrivateRoutes;
