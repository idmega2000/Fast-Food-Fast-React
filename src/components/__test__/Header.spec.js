/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('This test the app component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it('test the app component', () => {
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Fast-Food-Fast');
  });


  it('test the header navbar', () => {
    wrapper.setState({
      openNav: true,
    });
    const navDiv = wrapper.find('#header-sm-sc');
    navDiv.at(0).simulate('click');
    expect(wrapper.instance().handleOpenNavBar()).toBeCalled;
  });
});
