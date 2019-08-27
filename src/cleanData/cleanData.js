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

  cleanVehicles: (vehicles) => {
    return vehicles.results.map(vehicle => {
      const cleanData = [
        vehicle.name,
        `Model: ${vehicle.model}`,
        `Class: ${vehicle.vehicle_class}`,
        `Passengers: ${vehicle.passengers}`, 
        null,
        vehicle.created,
        false
      ]
      return cleanData
    })
  }
}


export default cleaner;