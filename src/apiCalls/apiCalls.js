const fetchCalls = {
  fetchMovies: () => {
    return fetch('https://swapi.co/api/films')
    .then(response => {
      if(!response.ok) {
        throw Error('there was a problem fetching your data')
      }
      return response.json()
    })
  },

  fetchCharacters: () => {
    return fetch('https://swapi.co/api/people/')
    .then(response => {
      if(!response.ok) {
        throw Error('there was a problem fetching your data')
      }
      return response.json()
    })
  },

  fetchPlanets: () => {
    return fetch('https://swapi.co/api/planets/')
    .then(response => {
      if(!response.ok) {
        throw Error('there was a problem fetching your data')
      }
      return response.json()
    })
  },

  fetchVehicles: () => {
    return fetch('https://swapi.co/api/vehicles')
    .then(response => {
      if(!response.ok) {
        throw Error('there was a problem fetching your data')
      }
      return response.json()
    })
  },

  fetchPeople: (people) => {
    const promises = people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({
          homeworld: data.name,
          population: data.population,
          name: person.name,
          species: person.species
         }))
        .catch(error => console.log(error));
    });
    return Promise.all(promises);
  },
 fetchSpecies: (people) => {
  const promises = people.map(person => {
    return fetch(person.species)
      .then(response => response.json())
      .then(data => ({
        ...person,
        id: person.created,
        species: data.name
      }))
      .catch(error => console.log(error));
  });
  return Promise.all(promises);
}, 
fetchResidents: (planets) => {
  const allPlanets = planets.map(planet => {
    let res = [];
    planet.residents.map(resident => {
      return fetch(resident)
      .then(response => response.json())
      .then(data => res.push(data.name))
      .catch(error => this.setState({ error }))
    });
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: res
    }
  });
  return allPlanets
  }
}

export default fetchCalls;