import { useState } from "react";
import Header from "../molecules/Header";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
