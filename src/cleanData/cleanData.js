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
    return planets.map(planet => {
      const cleanData = [
        planet.name,
        `Terrain: ${planet.terrain}`,
        `Population: ${planet.population}`,
        `Climate: ${planet.climate}`,
        `Residents: ${planet.residents}`,
        planet.created,
        false
      ]
      return cleanData
  })
  },

  cleanVechicles: (vehicles) => {

  }
}


export default cleaner;