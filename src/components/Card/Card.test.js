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
  ]
  beforeEach(() => {
    wrapper =  shallow(
      <Card 
        datum={fakeData}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });
});