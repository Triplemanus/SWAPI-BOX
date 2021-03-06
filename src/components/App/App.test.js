import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
// import { MemoryRouter } from 'react-router-dom';
// import { Home } from '../Home/Home'
// import CardContainer from '../CardContainer/CardContainer';
// import { NotFound } from '../NotFound/NotFound';


describe ('App', () => {
  let wrapper;
  const mockFavorite = [
    'aint',
    'no',
    'thang',
    'but a',
    'chicken',
    'wang',
    false
  ];

  const mockMovie = {
    title: 'aint no thang',
    release_date: 'year',
    episode: 'four',
    text: 'but a chicken wang',
  }

  const mockPeople = {
    name: 'Aidan',
    Homeworld: 'Earth',
    Species: 'hooman',
    Population: 'a lot'
  }

  const mockPlanet = {
    name: 'Earth',
    Population: 'a lot',
    Climate: 'livable but getting worse',
    Residents: 'me', 
  }

  const mockVehicle = {
    name: 'car',
    Model: 'something',
    Class: 'super',
    Passengers: 50000000000, 
  }

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide landing page when button is clicked', () => {
    const mockEvent = { target: {name: 'landingPage', value: false}};
    const expectedValue = false;

    wrapper.instance().hideLanding(mockEvent);

    expect(wrapper.state('landingPage')).toEqual(expectedValue);
  });

  it('should show landing page when button is clicked', () => {
    const mockEvent = { target: {name: 'landingPage', value: true}};
    const expectedValue = true;

    wrapper.instance().showLanding(mockEvent);

    expect(wrapper.state('landingPage')).toEqual(expectedValue);
  });

  it('should add card to favorite card array when clicked', () => {
    expect(wrapper.state('favoriteCards').length).toEqual(0)
    wrapper.instance().updateFavoriteCard(mockFavorite)
    expect(wrapper.state('favoriteCards')).toEqual([mockFavorite])
    wrapper.instance().updateFavoriteCard(mockFavorite)
    expect(wrapper.state('favoriteCards').length).toEqual(0)
  });

  it('should set movie to state when setMovie is called', () => {
    expect(wrapper.state('filmData')).toEqual([])
    wrapper.instance().setMovie(mockMovie)
    expect(wrapper.state('filmData')).toEqual(mockMovie)
  });

  it('should set people to state when setPeople is called', () => {
    expect(wrapper.state('peopleData')).toEqual([])
    wrapper.instance().setPeople(mockPeople)
    expect(wrapper.state('peopleData')).toEqual(mockPeople)
  })

  it('should set planets to state when setPlanets is called', () => {
    expect(wrapper.state('planetData')).toEqual([])
    wrapper.instance().setPlanets(mockPlanet)
    expect(wrapper.state('planetData')).toEqual(mockPlanet)
  })

  it('should set vehicles to state when setVehicles is called', () => {
    expect(wrapper.state('vehicleData')).toEqual([])
    wrapper.instance().setVehicles(mockVehicle)
    expect(wrapper.state('vehicleData')).toEqual(mockVehicle)
  })

  // describe('Routes', () => {
  //   it('should route to the home page', () => {
  //     const wrapper = mount(
  //       <MemoryRouter initialEntries={['/']} initialIndex={0}>
  //         <App />
  //       </MemoryRouter>
  //     );
  
  //     expect(wrapper.find(Home)).toHaveLength(1);
  //   });

  //   it('should route to people page', () => {
  //     const wrapper = mount(
  //       <MemoryRouter initialEntries={['/people']} initialIndex={0}>
  //         <App />
  //       </MemoryRouter>
  //     );
  
  //     expect(wrapper.find(CardContainer)).toHaveLength(1);
  //   });

  //   it('should route to the planets page', () => {
  //     const wrapper = mount(
  //       <MemoryRouter initialEntries={['/planets']} initialIndex={0}>
  //         <App />
  //       </MemoryRouter>
  //     );
  
  //     expect(wrapper.find(CardContainer)).toHaveLength(1);
  //   });

  //   it('should route to the vehicles page', () => {
  //     const wrapper = mount(
  //       <MemoryRouter initialEntries={['/vehicles']} initialIndex={0}>
  //         <App />
  //       </MemoryRouter>
  //     );
  
  //     expect(wrapper.find(CardContainer)).toHaveLength(1);
  //   });

  //   it('should route to the favorites page', () => {
  //     const wrapper = mount(
  //       <MemoryRouter initialEntries={['/favorites']}>
  //         <App />
  //       </MemoryRouter>
  //     );
  
  //     expect(wrapper.find(CardContainer)).toHaveLength(1);
  //   });

  //   it('should route to the 404 page', () => {
  //     const wrapper = mount(
  //       <MemoryRouter initialEntries={['/sometjing']}>
  //         <App />
  //       </MemoryRouter>
  //     );
  
  //     expect(wrapper.find(NotFound)).toHaveLength(1);
  //   });
  // });
});

