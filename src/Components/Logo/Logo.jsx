import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="relative">
        <img src={logo} alt="" />
        <h3 className="font-extrabold text-2xl absolute top-3.5 left-4.5">
          ZapShift
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
