import React, { Component } from 'react';
import './App.css';
import OpeningCrawl from './OpeningCrawl';
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
    filmData: [],
    peopleData: [],
    planetData: [],
    vehicleData: [],
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

    // fetch('https://swapi.co/api/people')
    // .then(response => response.json())
    // .then(data => this.setState({
    //   peopleData: data.results
    // }))
    // .catch(error => this.setState({ error }))

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
   const { filmData, peopleData, planetData, vehicleData } = this.state;
    return (
      <main>
        <OpeningCrawl 
        title={filmData.title} 
        date={filmData.release_date}
        episode={filmData.episode_id}
        text={filmData.opening_crawl}  />
        <section>
          <h1>SWAPI-BOX</h1>
          <button className='favorites' img="">Favs <span className="favsCount" >0</span>
          </button>
        </section>
        <nav>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </nav>
        <section className="card-container">
          <CardContainer />
        </section>
      </main>
      )
  }  
}

export default App;
