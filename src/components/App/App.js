import React, { Component } from 'react';
import './App.scss';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
    filmData: [],
    peopleData: [],
    planetData: [],
    vehicleData: [],
    favoriteCards: [],
    landingPage: true,
    error: ''
    }
  }

  hideLanding = () => {
    this.setState({ landingPage: false })
  }

  showLanding = () => {
    this.setState({ landingPage: true })
  }

  componentDidMount() { 
    // const number =  Math.floor(Math.random() * (6 - 2 + 1)) + 1
    // fetch('https://swapi.co/api/films')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   filmData: data.results[number]
    // }))
    // .catch(error => this.setState({ error }))

    // fetch('https://swapi.co/api/people/')
    //  .then(response => response.json())
    //  .then(data => this.fetchPeople(data.results))
    //  .then(data => this.fetchSpecies(data))
    //  .then(data => data.map( datum => {
    //     const clean = [
    //       datum.name,
    //       `Homeworld: ${datum.homeworld}`,
    //       `Species: ${datum.species}`,
    //       `Population: ${datum.population}`,
    //       null,
    //       datum.id
    //     ]
    //     return clean
    //  }))
    //  .then(peopleData => this.setState({ peopleData }))
    //  .catch(error => this.setState({ error }))

    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => this.fetchResidents(data.results))
    .then(data => data.map(datum => {
      console.log(datum)
          const clean = [
            datum.name,
            `Terrain: ${datum.terrain}`,
            `Population: ${datum.population}`,
            `Climate: ${datum.climate}`,
            `Residents: ${datum.residents}`,
          ]
          return clean
    }))
    .then(planetData => this.setState({ planetData }))
    .catch(error => this.setState({ error }))

    // fetch('https://swapi.co/api/vehicles')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   vehicleData: data.results.map(vehicle => {
    //     const clean = [
    //       vehicle.name,
    //       `Model: ${vehicle.model}`,
    //       `Class: ${vehicle.vehicle_class}`,
    //       `Passengers: ${vehicle.passengers}`, 
    //       null,
    //       vehicle.created
    //     ]
    //     return clean
    //   })
    // }))
    // .catch(error => this.setState({ error }))
  }

//   fetchPeople = (people) => {
//     const promises = people.map(person => {
//       return fetch(person.homeworld)
//         .then(response => response.json())
//         .then(data => ({
//           homeworld: data.name,
//           population: data.population,
//           name: person.name,
//           species: person.species
//          }))
//         .catch(error => console.log(error));
//     });
//     return Promise.all(promises);
//   };


//  fetchSpecies = (people) => {
//   const promises = people.map(person => {
//     return fetch(person.species)
//       .then(response => response.json())
//       .then(data => ({
//         ...person,
//         id: person.created,
//         species: data.name
//       }))
//       .catch(error => console.log(error));
//   });
//   return Promise.all(promises);
// };

fetchResidents = (planets) => {
  const allPlanets = planets.map(planet => {
    let res = [];
    planet.residents.map(resident => {
      return fetch(resident)
      .then(response => response.json())
      .then(data => res.push(data.name))
      .catch(error => this.setState({ error }))
    });
    console.log(res)
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: res
    }
  });
  return allPlanets
};

  render () {
   const { filmData, peopleData, planetData, vehicleData, favoriteCards, landingPage} = this.state;
    return (
    
      <main>
        {landingPage && 
          <OpeningCrawl 
          title={filmData.title} 
          date={filmData.release_date}
          episode={filmData.episode_id}
          text={filmData.opening_crawl} 
          hideLanding={this.hideLanding} />
        }
        {!landingPage && 
        <>
        <section className='idk-change-later'>
        <button className='show-movie star-wars-text' onClick={this.showLanding}>
          Show Movie Stuff
        </button>
          <h1 className='star-wars-text header'>SWAPI-BOX</h1>
          <button className='favorites star-wars-text'>
            Favorites <span> {favoriteCards.length}</span>
          </button>
        </section>
        <nav>
          <button className='star-wars-text nav_button'>People</button>
          <button className='star-wars-text nav_button'>Planets</button>
          <button className='star-wars-text nav_button'>Vehicles</button>
        </nav>
        <section>
          {/* if people is clicked           */}
          {/* <CardContainer data={peopleData}/> */}
          
          {/* if planets is clicked */}
          <CardContainer data={planetData}/>

          
          {/* if vehicles is clicked */}
          {/* <CardContainer data={vehicleData}/> */}


        </section>
        </>
        }
      </main>
      )
  }  
}

export default App;
