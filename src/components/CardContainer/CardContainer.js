import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'
import PropTypes from 'prop-types'

const CardContainer = ({ data, favoriteStatus }) => {
  const card = data.map(datum => {
    return <Card datum={datum} key={datum[5]} favoriteStatus={favoriteStatus} />
  });
  return (
    <section className='card-components' >
      {card}
    </section>
  )
}

export default CardContainer;


CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  favoriteStatus: PropTypes.func.isRequired
}