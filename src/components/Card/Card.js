import React from 'react';

const Card = ({ name, species, homeworld}) => {
  return (
    <article>
      <h3>{name}</h3>
      <button>Favorite me!</button>
      <p>Homeworld: Tatooine</p>
      <p>Species: {species}</p>
      <p>Population: 100000</p>
    </article>
  )
}

export default Card;