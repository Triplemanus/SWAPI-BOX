import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'
import PropTypes from 'prop-types'

const CardContainer = ({ data, favoriteCards, favoriteStatus }) => {
  const card = data.map(datum => {
    return <Card datum={datum} key={datum[5]} favoriteStatus={favoriteStatus} />
  });
  return (
    <section className='card-components' >
      {favoriteCards !== undefined && favoriteCards.length === 0 && <h1 className='favorites-message'>You do not have favorites</h1>}
      {card}
    </section>
  )
}

export default CardContainer;


CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  favoriteCards: PropTypes.array.isRequired,
  favoriteStatus: PropTypes.func.isRequired
}