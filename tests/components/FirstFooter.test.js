import React from 'react';
import { shallow } from 'enzyme';
import FirstFooter from '../../src/components/FirstFooter';


describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<FirstFooter />);
    const text = wrapper.find('a').text();
    expect(text).toEqual('Order Now');
  });
});
