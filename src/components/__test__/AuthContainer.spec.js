import React from 'react';
import { shallow } from 'enzyme';
import AuthContainer from '../AuthContainer';

describe('This test the app component', () => {
  it('test the app component', () => {
    const wrapper = shallow(<AuthContainer />);
    const text = wrapper.find('.login-wrapper');
    expect(text.length).toEqual(1);
  });
});
