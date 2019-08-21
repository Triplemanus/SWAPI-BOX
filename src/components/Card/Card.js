import React from 'react';
import './Card.scss';

const Card = ({ name, species, homeworld}) => {
  return (
    <article className='card'>
      <div className='card_content'>
        <h3>{name}</h3>
        <button>Favorite me!</button>
        <p>Homeworld: Tatooine</p>
        <p>Species: {species}</p>
        <p>Population: 100000</p>
      </div>
    </article>
  )
}

export default Card;