import React from 'react';
import Card from './Card'

const CardContainer = ({ peopleData }) => {
  const person = peopleData.map(person => {
    return <Card name={person.name} species={person.species} />
  })
  return (
    person
  )
}

export default CardContainer;