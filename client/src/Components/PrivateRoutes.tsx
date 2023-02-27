import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/config";

const PrivateRoutes = () => {
  const { user } = useStoreState((state) => state.auth);
  const { setUser } = useStoreActions((action) => action.auth);

  function parseJwt(token: any) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }

  function isValidToken() {
    if (localStorage.getItem("access_token")) {
      const decodedJwt = parseJwt(localStorage.getItem("access_token"));

      if (decodedJwt.exp * 1000 < Date.now()) {
        return false;
      }
    }
    return true;
  }

  return !user.isAuthenticated || !isValidToken() ? (
    <Navigate to={"/login"} />
  ) : (
    <Outlet />
  );
};

export default PrivateRoutes;
