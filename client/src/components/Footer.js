import React from "react";
import { Link } from "react-router-dom";
import footerIcon from "../images/footer_icon.png";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <img className="footer-icon" src={footerIcon}></img>
          <li className="footer__page-container footer__page-container--selected">
          <Link to={"/discussion"}>
            <a className="footer-text footer-text--selected">Discussion</a>
            </Link>
          </li>
          <li className="footer__page-container">
            <a className="footer-text">Featured</a>
          </li>
          <li className="footer__page-container">
            <a className="footer-text">Learn</a>
          </li>
          <li className="footer__page-container">
            <a className="footer-text">All Listings</a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Footer;
