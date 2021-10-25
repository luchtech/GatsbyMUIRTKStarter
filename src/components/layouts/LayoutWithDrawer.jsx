import React from "react";
import NavbarWithDrawer from "../navbar/NavbarWithDrawer";

const LayoutWithDrawer = ({ children }) => {
  return <NavbarWithDrawer>{children}</NavbarWithDrawer>;
};

export default LayoutWithDrawer;
