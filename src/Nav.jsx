import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="sticky top-0 font-mono w-full p-4 bg-violet-200 shadow flex justify-between items-center text-violet-600">
      <span className="max-md:hidden font-semibold text-2xl">OMAR TRAIN</span>
      <div className="font-medium">
        <NavLink to="/home" className="mr-5">
          HOME
        </NavLink>
        <NavLink to="/register" className="mr-5">
          REGISTER
        </NavLink>
        <NavLink to="/studs" className="mr-5">
          USERS
        </NavLink>
        <NavLink to="/about" className="">
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}
