import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import baseballCategoryHeader from "../images/baseball_category_header.png";
import aboutIcon from "../images/about_icon.png";
import learnIcon from "../images/learn_icon.png";
import "./BaseballPage.scss";

function BaseballPage() {
  return (
    <>
      <Navbar />
      <div className="community-hero">
        <img src={baseballCategoryHeader}></img>
      </div>
      <div className="community-description">
        <div className="info-container">
          <img className="info-icon" src={aboutIcon}></img>
          <h2 className="info-header">About</h2>
        </div>
        <p className="info-description">
          This is a room to learn, buy, sell, and trade Baseball cards
        </p>
        <div className="info-container">
          <img className="info-icon" src={learnIcon}></img>
          <h2 className="info-header">Learn</h2>
        </div>
        <p className="info-description">Discover ways to invest</p>
      </div>
      <hr></hr>
      <Footer />
    </>
  );
}

export default BaseballPage;
