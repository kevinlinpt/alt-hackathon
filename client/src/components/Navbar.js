import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/alt_logo.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="divider"></div>
      <div className="pages-container">
        <li>
          <a className="pages-text">BUY</a>
        </li>
        <li>
          <a className="pages-text">SELL</a>
        </li>
        <li>
          <a className="pages-text">BORROW</a>
        </li>
        <li>
          <a className="pages-text">VAULT</a>
        </li>
        <Link to={"/forum"}>
        <li>
          <a className="pages-text">COMMUNITIES</a>
        </li>
        </Link>
        <li>
          <a className="pages-text">ABOUT</a>
        </li>
        <li>
          <a className="pages-text">HELP</a>
        </li>
      </div>
      <div className="divider"></div>
          <a className="profile-container pages-text">PROFILE</a>
    </div>
  );
}

export default Navbar;
