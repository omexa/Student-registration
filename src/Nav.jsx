import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav-bar">
      <span>OMAR TRAIN</span>
      <div className="nav-items">
        <NavLink to="/home" className="">
          HOME
        </NavLink>
        <NavLink to="/register" className="">
          REGISTER
        </NavLink>
        <NavLink to="/about" className="">
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}
