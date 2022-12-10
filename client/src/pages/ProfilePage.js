import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import avatarIcon from "../images/avatar_icon_1.png";
import profileQrCode from "../images/profile_qr_code.png"
import "./ProfilePage.scss";

function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-description">
          <div className="avatar-container_profile">
            <img src={avatarIcon} alt="avatar-icon"></img>
            <img className="qr-code-container" src={profileQrCode} alt="profile-qr-code"></img>
          </div>
          <h1 className="user-name">Kevin Lin</h1>
        </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </>
  );
}

export default ProfilePage;
