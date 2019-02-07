import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../LandingPage';


describe('This test the Landing page component', () => {
  it('test render the landing page component', () => {
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
