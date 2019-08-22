import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = ({ data }) => {
  const card = data.map(datum => {
    return <Card datum={datum} key={datum[6]} />
  })
  return (
    <section className='card-components'>
      {card}
    </section>
  )
}

export default CardContainer;