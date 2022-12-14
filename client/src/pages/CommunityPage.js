import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import searchIcon from "../images/search_icon.png";
import CommunityCard from "../components/CommunityCard";
import baseballCard from "../images/baseball_category.png";
import basketballCard from "../images/basketball_category.png";
import footballCard from "../images/football_category.png";
import hockeyCard from "../images/hockey_category.png";
import soccerCard from "../images/soccer_category.png";
import pokemonCard from "../images/pokemon_category.png";
import "./CommunityPage.scss";

function CommunityPage() {
  const cards = [
    { image: baseballCard },
    { image: basketballCard },
    { image: footballCard },
    { image: hockeyCard },
    { image: soccerCard },
    { image: pokemonCard },
  ];

  return (
    <>
      <Navbar />
      <h1 className="community-header">COMMUNITIES</h1>
      <div className="search-bar">
        <img className="search-bar__icon" src={searchIcon} />
        <p className="search-bar__text">Search</p>
      </div>
      <hr className="line-break"></hr>
      <h2 className="community-subheader">Categories</h2>
      <Link to={"/community/baseball"}>
        <div className="secondary-card-container">
          <CommunityCard cards={cards} />
        </div>
      </Link>
    </>
  );
}

export default CommunityPage;
