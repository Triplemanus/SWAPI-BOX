import React from 'react';
import './Card.scss';
import Star from "../../assets/star.svg" 

const Card = ({ datum }) => {
  console.log('datum is ', datum)
  return (
    <article className='card'>
      <div class="card-title">
        <h3>{datum[0]}</h3>
        <img class="star-card-button" src={Star} alt="" onClick={() => datum.favoriteStatus(datum)}/>
      </div>
      <div className='card_content'>
        <p>{datum[1]}</p>
        <p>{datum[2]}</p>
        <p>{datum[3]}</p>
        <p>{datum[4]}</p>
      </div>
    </article>
  )
}

export default Card;