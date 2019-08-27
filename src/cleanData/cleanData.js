const cleaner = {
  cleanPeople: (people) => {
    return people.map( people => {
      const cleanData = [
        people.name,
        `Homeworld: ${people.homeworld}`,
        `Species: ${people.species}`,
        `Population: ${people.population}`,
        null,
        people.created,
        false
      ]
      return cleanData
    })
  },

  cleanPlanets: (planets) => {

  },

  cleanVechicles: (vehicles) => {

  }
}


export default cleaner;