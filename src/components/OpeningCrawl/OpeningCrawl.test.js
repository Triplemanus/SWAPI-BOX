import React from 'react';
import { shallow } from 'enzyme';
import OpeningCrawl from './OpeningCrawl';

describe('OpeningCrawl', () => {
  let wrapper;
  let mockHideLanding = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <OpeningCrawl
        title='hello'
        date='something'
        episode='four'
        text='long time ago'
        hideLanding={mockHideLanding}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call hideLanding onclick', () => {
    wrapper.find('.hide-movie').simulate('click')
    expect(mockHideLanding).toHaveBeenCalled()
  });
}); 