import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
//import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import OpeningCrawl from './OpeningCrawl';
import App from '../App/App';

configure ({ adapter: new Adapter() });

describe ('OpeningCrawl', () => {
  let wrapper;
  beforeEach(() => {
    const testData = {
      title: 'A New Hope',
      date: '1979/05/24',
      episode: 'IV',
      text: 'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.',
      hideLanding: 'true'};
    wrapper = shallow(<OpeningCrawl data={testData}/>)
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OpeningCrawl />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should crawl with film data when loaded', () => {
    // const mockEvent = { target: {name: 'landingPage', value: false}};
    // const expectedValue = false;

    // wrapper.instance().App.hideLanding(mockEvent);

    // expect(wrapper.state('landingPage')).toEqual(expectedValue);
  });

  it('should run hideLanding when button is clicked', () => {
    //Mock date.now()
    global.Date.now = jest.spyOn(global.Date, 'now').mockImplementation(() => 54321);
    const spy = jest.spyOn(wrapper.instance(), 'hideLanding');
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().forceUpdate();

    wrapper.find('button').simulate('click', mockEvent);

    expect(spy).toHaveBeenCalled();
  });
});

