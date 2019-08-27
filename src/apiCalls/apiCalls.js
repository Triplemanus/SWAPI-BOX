const fetchCalls = {

  fetchMovies: () => {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      filmData: data.results[number]
    }))
    .catch(error => this.setState({ error }))
  },

  fetchPeople: () => {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => this.fetchPeople(data.results))
    .then(data => this.fetchSpecies(data))
    .then(data => data.map( people => {
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
    }))
    .then(peopleData => this.setState({ peopleData }))
    .catch(error => this.setState({ error }))
  },

  fetchPlanets: () => {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => this.fetchResidents(data.results))
    .then(data => data.map(planet => {
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
    }))
    .then(planetData => this.setState({ planetData }))
    .catch(error => this.setState({ error }))
  },
  fetchVechicles: () => {
    fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(data => this.setState({
      vehicleData: data.results.map(vehicle => {
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
    }))
    .catch(error => this.setState({ error }))
  }
}