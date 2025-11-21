import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (!user) {
    // sending current location so after login redirect back
    return <Navigate to="/login" state={{ from: location }} replace />;

  }

  return children;
};

export default PrivateRoutes;
