import React from "react";
import "./Card.scss";

function Card({ cards }) {
  
  return (
    <>
      {cards.map((cards) => {
        console.log(cards.image);
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

export default Card;
