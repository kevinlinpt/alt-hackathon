import React from 'react'
import "./Card.scss"
import cardImage from "../images/panini-maradona_card.jpg"

function Card() {
  return (
    <div className="card">
            <img className="card__image" src ={cardImage} alt={"image"}/>
            <div className="card__title">Panini Maradona</div>
        </div>
  )
}

export default Card