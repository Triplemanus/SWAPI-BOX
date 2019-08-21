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
    error: ''
    }
  }

  componentDidMount() {
    // fetch('https://swapi.co/api/films')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   filmData: data.results[0]
    // }))
    // .catch(error => this.setState({ error }))

    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => this.setState({
      peopleData: data.results
    }))
    .catch(error => this.setState({ error }))

    // fetch('https://swapi.co/api/planets')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   planetData: data.results
    // }))
    // .catch(error => this.setState({ error }))

    // fetch('https://swapi.co/api/vehicles')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   vehicleData: data.results
    // }))
    // .catch(error => this.setState({ error }))
  }

  render () {
   const { filmData, peopleData, planetData, vehicleData, favoriteCards} = this.state;
    return (
      <main>
        <OpeningCrawl 
        title={filmData.title} 
        date={filmData.release_date}
        episode={filmData.episode_id}
        text={filmData.opening_crawl}  />
        <section className='idk-change-later'>
        <button className='show-movie star-wars-text'>
          Show Movie Stuff
        </button>
          <h1 className='star-wars-text header'>SWAPI-BOX</h1>
          <button className='favorites star-wars-text'>
            Favorites 
            <span> {favoriteCards.length}</span>
          </button>
        </section>
        <nav>
          <button className='star-wars-text nav_button'>People</button>
          <button className='star-wars-text nav_button'>Planets</button>
          <button className='star-wars-text nav_button'>Vehicles</button>
        </nav>
        <section>
          <CardContainer peopleData={peopleData}/>
        </section>
      </main>
      )
  }  
}

export default App;
