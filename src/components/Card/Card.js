import React from 'react';
import './Card.scss';

const Card = ({ datum }) => {
  return (
    <article className='card'>
      <div className='card_content'>
        <h3>{datum[0]}</h3>
        <button>Favorite me!</button>
        <p>{datum[1]}</p>
        <p>{datum[2]}</p>
        <p>{datum[3]}</p>
        <p>{datum[4]}</p>
      </div>
    </article>
  )
}

export default Card;