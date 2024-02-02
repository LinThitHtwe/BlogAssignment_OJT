import UnAuthorize from "pages/UnAuthorize";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const ProtectedUserRoutes = () => {
  const user = useSelector((state) => state.user.user);

  const renderComponent = () => {
    if (!user || user.user.role != "user") {
      return <UnAuthorize />;
    }
    return <Outlet />;
  };

  return <>{renderComponent()}</>;
};

export default ProtectedUserRoutes;
