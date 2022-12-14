import React from "react";
import "./CommunityCard.scss";

function CommunityCard({ cards }) {
  return (
    <>
      {cards.map((cards) => {
        return (
          <div className="secondary-card">
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

export default CommunityCard;
