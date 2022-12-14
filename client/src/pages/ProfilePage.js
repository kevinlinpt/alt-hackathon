import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import avatarIcon from "../images/profile_picture.png";
import profileQrCode from "../images/profile_qr_code.png";
import card1 from "../images/card_1.png";
import card2 from "../images/card_2.png";
import card3 from "../images/card_3.png";
import card4 from "../images/card_4.png";
import card5 from "../images/card_5.png";
import "./ProfilePage.scss";

function ProfilePage() {
  const cards = [
    { image: card1 },
    { image: card2 },
    { image: card3 },
    { image: card4 },
  ];
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-description">
          <h1 className="user-name">John Doe</h1>
          <div className="profile-image-container">
            <img
              className="qr-code-container"
              src={profileQrCode}
              alt="profile-qr-code"
            ></img>
            <img
              className="avatar-icon"
              src={avatarIcon}
              alt="avatar-icon"
            ></img>
          </div>
        </div>
        <h3 className="profile-stats">
          6 cards sold / 11 card purchases / 1 active listing
        </h3>
        <h2 className="portfolio-header">Portfolio</h2>
        <div className="card-container">
          <Card cards={cards} />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
