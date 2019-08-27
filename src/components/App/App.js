import React, { Component } from 'react';
import './App.scss';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import CardContainer from '../CardContainer/CardContainer';
import { Link, Route, Switch } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound'
import { Home } from '../Home/Home'
import fetchCalls from '../../apiCalls/apiCalls'
import cleaner from '../../cleanData/cleanData'

export default class App extends Component {
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

  updateFavoriteCard = (favoriteStatus) => {
    if(!this.state.favoriteCards.includes(favoriteStatus)) {
      favoriteStatus[6] = !favoriteStatus[6]
      this.setState({ favoriteCards: [...this.state.favoriteCards, favoriteStatus]});
    } else {
      favoriteStatus[6] = !favoriteStatus[6];
      const removeCard = this.state.favoriteCards.filter(card => card !== favoriteStatus)
      this.setState({ favoriteCards: removeCard });
    } 
  }
  componentDidMount() { 
      const number =  Math.floor(Math.random() * (6 - 2 + 1)) + 1
      fetchCalls.fetchMovies()
      .then(data => this.setState({
        filmData: data.results[number]
      }))
      .catch(error => this.setState({ error }))

      fetchCalls.fetchCharacters()
      .then(data => fetchCalls.fetchPeople(data.results))
      .then(data => fetchCalls.fetchSpecies(data))
      .then(data => cleaner.cleanPeople(data))
      .then(peopleData => this.setState({ peopleData }))
      .catch(error => this.setState({ error }))


      fetchCalls.fetchPlanets()
      .then(data => fetchCalls.fetchResidents(data.results))
      .then(data => cleaner.cleanPlanets(data))
      .then(planetData => this.setState({ planetData }))
      .catch(error => this.setState({ error }))


      fetchCalls.fetchVehicles()
      .then(data => cleaner.cleanVehicles(data))
      .then(vehicleData => this.setState({ vehicleData }))
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
          <Link to='/favorites'>
            <button className='favorites star-wars-text'>
              Favorites <span> {favoriteCards.length}</span>
            </button>
          </Link>
        </section>
        <nav>
          <Link to='/people'>
            <button className='star-wars-text nav_button'>People</button>
          </Link>
          <Link to='/planets'>
            <button className='star-wars-text nav_button'>Planets</button>
          </Link>
          <Link to='/vehicles'>
            <button className='star-wars-text nav_button'>Vehicles</button>
          </Link>
        </nav>
        <section>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/people' render={() => <CardContainer data={peopleData} favoriteStatus={this.updateFavoriteCard} />}/>
            <Route exact path='/planets' render={() => <CardContainer data={planetData} favoriteStatus={this.updateFavoriteCard} />}/>
            <Route exact path='/vehicles' render={() => <CardContainer data={vehicleData} favoriteStatus={this.updateFavoriteCard} />}/>
            <Route exact path='/favorites' render={() => <CardContainer data={favoriteCards} favoriteStatus={this.updateFavoriteCard} />}/>
            <Route component={NotFound} />
          </Switch>
        </section>
        </>
        }
      </main>
    )
  }  
}

