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
  }
}