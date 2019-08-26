import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure ({ adapter: new Adapter() });

describe ('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
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

  it('should render ', () => {

  });
});

