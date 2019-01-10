import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Fast-Food-Fast');
  });
});
