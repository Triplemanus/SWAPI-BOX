import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import CardContainer from '../CardContainer/CardContainer';
import App from './App'


describe('Route', () => {
  it('should render card container when clicked', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/people' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(CardContainer)).toHaveLength(1);
  }); 
})