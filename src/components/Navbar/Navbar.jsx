import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-center gap-5">
      <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
        <Link to="/">Home</Link>
      </li>
      <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
        <Link to="/form">Form</Link>
      </li>
      <li className="border-b  lg:border-hidden rounded-md pb-1 mt-2 ">
        <Link to="/card">Card</Link>
      </li>
    </div>
  );
};

export default Navbar;
