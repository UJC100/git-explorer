import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({isLogged}) => {
  return (
    <>
      <nav>
        <a href="##" className="logo-nav">
          Git Explorer
        </a>
        <div className="link-cont">
          <Link to={"/"}>Repos</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/search"}>search</Link>
          <Link to={"/authProfile"}>Profile</Link>       
          {!isLogged && (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
