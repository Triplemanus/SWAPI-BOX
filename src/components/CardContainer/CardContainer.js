import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = ({ data }) => {
  const card = data.map(person => {
    return <Card name={person.name} species={person.species} />
  })
  return (
    <section className='card-components'>
      {card}
    </section>
  )
}

export default CardContainer;