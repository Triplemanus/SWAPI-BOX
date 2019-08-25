import React from 'react';
import { configure, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import OpeningCrawl from './OpeningCrawl';
import App from '../App/App';

configure ({ adapter: new Adapter() });

describe ('OpeningCrawl', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OpeningCrawl />)
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run hideLanding when button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'App.hideLanding');
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().forceUpdate();

    wrapper.find('button').simulate('click', mockEvent);

    expect(spy).toHaveBeenCalled();
  });
});

