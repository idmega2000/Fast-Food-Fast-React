import React from 'react';
import { shallow } from 'enzyme';
import LandingBody from '../LandingBody';

describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<LandingBody />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Your Online Fast Food Fast');
  });
});
