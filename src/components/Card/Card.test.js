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


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
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

