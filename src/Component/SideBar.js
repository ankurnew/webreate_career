import React from "react";
import "../Styling/SideBar.css";
import { NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="career-container">
      <Outlet />

      <div className="sidebar">
        <div className="top-nav">Career</div>
        <div className="bottom-nav">
          <NavLink to="/career" end>
            Why Webreate
          </NavLink>
          <NavLink to="values">Webreate Values</NavLink>
          <NavLink to="openings">Job Openings</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
