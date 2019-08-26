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


// describe ('CardContainer', () => {
//   let wrapper;
//   let testData = [{ name: 'Alderaan', population: '20000000', terrain: 'grasslands, mountains', climate: 'temperate', residents: ['Luke Skywalker', 'C3PO'], id:'100'}];
//   beforeEach(() => {
//     wrapper = shallow(<CardContainer data={ testData} key={Date.now()}/>)
//   });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardContainer data={mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

  // it('should hide landing page when button is clicked', () => {
  //   const mockEvent = { target: {name: 'landingPage', value: false}};
  //   const expectedValue = false;

  //   wrapper.instance().hideLanding(mockEvent);

  //   expect(wrapper.state('landingPage')).toEqual(expectedValue);
  // });

  // it('should show landing page when button is clicked', () => {
  //   const mockEvent = { target: {name: 'landingPage', value: true}};
  //   const expectedValue = true;

  //   wrapper.instance().showLanding(mockEvent);

  //   expect(wrapper.state('landingPage')).toEqual(expectedValue);
  // });

