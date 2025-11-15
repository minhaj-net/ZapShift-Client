import React from 'react';
import logo from "../../assets/logo.png"
const Logo = () => {
  return (
    <div className='relative'>
      <img src={logo} alt="" />
      <h3 className='font-extrabold text-2xl absolute top-3.5 left-4.5'>ZapShift</h3>
    </div>
  );
};

export default Logo;