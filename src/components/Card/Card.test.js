import Card from './Card';
import { shallow } from 'enzyme';
import React from 'react'

describe('Card', () => {
  let wrapper;
  let fakeData = [
    'hello',
    'there',
    'person',
    'of',
    'interest'
  ];
  const mockFavorite = jest.fn()
  beforeEach(() => {
    wrapper =  shallow(
      <Card 
        datum={fakeData}
        favoriteStatus={mockFavorite}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });

  it('should call favorite method on click', () => {
    wrapper.find('img').simulate('click')
    expect(mockFavorite).toHaveBeenCalled()
  })
});
