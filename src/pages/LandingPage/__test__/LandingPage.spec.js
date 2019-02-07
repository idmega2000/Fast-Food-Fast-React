import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';


describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.setProps({
      user: {
        userName: 'fast',
      },
    });
    const text = wrapper.find('LandingBody');
    expect(text.length).toEqual(1);
  });
});
