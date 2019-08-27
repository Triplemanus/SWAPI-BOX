import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;
  let mockData = [
    'somewhere',
    'over',
    'the',
    'rainbow',
    'stars',
    'something',
    'words'
  ]
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer
        data={mockData}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  }); 
});
