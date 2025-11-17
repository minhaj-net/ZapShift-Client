import React from "react";
import Logo from "../Components/Logo/Logo";
import AuthImg from "../assets/authImage.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex justify-center md:gap-64 items-center">
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <img src={AuthImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
