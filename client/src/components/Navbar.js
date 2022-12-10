import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/reddit_logo.png";
import avatarIcon from "../images/avatar_icon_1.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <form action="" className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search"></input>
      </form>
      <div className="pages-container">
        <Link to={"/forum"}>
        <li>
          <a className="pages-text">Community</a>
        </li>
        </Link>
        <li>
          <a className="pages-text">Browse</a>
        </li>
        <li>
          <a className="pages-text">About</a>
        </li>
      </div>
      <Link to={"/profile"}>
      <button className="avatar-container">
        <img src={avatarIcon} alt="" className="avatar" />
      </button>
      </Link>
    </div>
  );
}

export default Navbar;
