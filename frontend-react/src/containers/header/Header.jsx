import React from "react";
import "./Header.scss";
import { Navbar, Sidebar } from "../../components";
export const Header = () => {
  return (
    <div className="__header">
      <Navbar />
      <Sidebar />
    </div>
  );
};
