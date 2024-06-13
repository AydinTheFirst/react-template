import { Component } from "@/components/Component";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Component>
        <Outlet />
      </Component>
    </>
  );
};

export default AppLayout;
