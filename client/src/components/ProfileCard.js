import React from "react";
import "./ProfileCard.scss";

function ProfileCard({ cards }) {
  
  return (
    <>
      {cards.map((cards) => {
        return (
          <div className="card">
            <img
              className="card__image"
              src={cards.image}
              alt="baseball card image"
            />
          </div>
        );
      })}
    </>
  );
}

export default ProfileCard;
