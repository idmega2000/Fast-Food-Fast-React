import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.find('a').text();
    expect(text).toEqual('Terms & Privacy');
  });
});
