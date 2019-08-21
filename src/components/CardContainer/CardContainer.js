import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = ({ peopleData }) => {
  const person = peopleData.map(person => {
    return <Card name={person.name} species={person.species} />
  })
  return (
    <section className='card-components'>
      {person}
    </section>
  )
}

export default CardContainer;