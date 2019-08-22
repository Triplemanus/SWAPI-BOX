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
    const number =  Math.floor(Math.random() * (6 - 2 + 1)) + 1
    // fetch('https://swapi.co/api/films')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   filmData: data.results[number]
    // }))
    // .catch(error => this.setState({ error }))

    // fetch('https://swapi.co/api/people')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   peopleData: data.results.map(person => {
        // const clean = [
          // person.name,
          // Homeworld: person.homeworld,
          // Species: person.species,
          // person.birth_year, 
          // null ,
          // person.created
      // ] 
      // return clean
    // })
    // }))
    // .catch(error => this.setState({ error }))

    // fetch('https://swapi.co/api/planets')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   planetData: data.results.map(planet => {
        // const clean = [
          // planet.name,
          // planet.terrain,
          // planet.population,
          // planet.climate, 
          // planet.residents,
          // planet.created
          //  ]
          // return clean
    // }))
    // .catch(error => this.setState({ error }))

    fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(data => this.setState({
      vehicleData: data.results.map(vehicle => {
        const clean = [
          vehicle.name,
          `Model: ${vehicle.model}`,
          `Class: ${vehicle.vehicle_class}`,
          `Passengers: ${vehicle.passengers}`, 
          null,
          vehicle.created
        ]
        return clean
      })
    }))
    .catch(error => this.setState({ error }))
  }

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
          {/* <CardContainer data={planetData}/> */}

          
          {/* if vehicles is clicked */}
          <CardContainer data={vehicleData}/>
        </section>
        </>
        }
      </main>
      )
  }  
}

export default App;
