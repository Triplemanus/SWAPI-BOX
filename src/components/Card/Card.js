import React from 'react';
import './Card.scss';
import Star from "../../assets/star.svg" 
import activeStar from "../../assets/star-active.svg"

const Card = ({ datum, favoriteStatus}) => {
  return (
    <article className='card'>
      <div class="card-title">
        <h3>{datum[0]}</h3>
          {!datum[6] &&
          <img className="star-card-button" src={Star} alt="" onClick={() => favoriteStatus(datum)}/>}
          {datum[6] &&
            <img className="star-card-button" src={activeStar} alt="" onClick={() => favoriteStatus(datum)}/>}
      </div>
      <div className='card_content residents'>
        <p>{datum[1]}</p>
        <p>{datum[2]}</p>
        <p>{datum[3]}</p>
        <p className="residents" >{datum[4]}</p>
      </div>
    </article>
  )
}

export default Card;