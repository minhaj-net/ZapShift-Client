import React from "react";
import Logo from "../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <div className="space-x-4">
        <NavLink>Service</NavLink>
        <NavLink>Coverage</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Be a Rider</NavLink>
      </div>
    </>
  );
  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar px-4">
        <div className="navbar bg-base-100 container mx-auto px-4">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end space-x-3">
            <Link className="btn">Sign in </Link>
            <Link className="btn btn-primary text-black font-medium  rounded-lg">Be A Rider </Link>

           <div className=" bg-black rounded-full w-9 text-white font-normal h-9 flex items-center justify-center">
             <FaArrowRight className="-rotate-45" />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
