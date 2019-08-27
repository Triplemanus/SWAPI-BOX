import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

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
});

