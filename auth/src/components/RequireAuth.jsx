import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContextProvider";

export default function RequireAuth({ children }) {
  let { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!user?.id) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
