import React, { Component } from 'react';
import './App.css';
import Crawl from './Crawl';
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
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      filmData: data.results
    }))
    .catch(error => this.setState({ error }))

    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      peopleData: data.results
    }))
    .catch(error => this.setState({ error }))

    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      planetData: data.results
    }))
    .catch(error => this.setState({ error }))

    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      vehicleData: data.results
    }))
    .catch(error => this.setState({ error }))
  }

  render () {
    return (
      <main>
        <Crawl movieInfo={this.state} />
        <title>
          <h1>SWAPI-BOX</h1>
          <button className='favorites' img="">Favs <span className="favsCount" >0</span>
          </button>
        </title>
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
