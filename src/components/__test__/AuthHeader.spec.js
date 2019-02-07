/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { AuthHeader, mapStateToProps } from '../AuthHeader';

describe('### Authenticated user Header', () => {
  let wrapper;
  const props = {
    userName: 'fast',
    cartOrderQuantity: 10,
  };
  beforeEach(() => {
    wrapper = shallow(<AuthHeader {...props} />);
    jest.spyOn(window.location, 'replace').mockImplementation(() => undefined);
  });

  it('test the header navbar', () => {
    wrapper.setState({
      openNav: true,
    });
    const navDiv = wrapper.find('#header-sm-sc');
    navDiv.at(0).simulate('click');
    expect(wrapper.instance().handleOpenNavBar()).toBeCalled;
  });

  it('shoild render the AuthHeader component', () => {
    const text = wrapper.find('.quantity-amount-holder');
    expect(text.length).toEqual(2);
  });


  it('should display the side nav', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.find('.header-bars').simulate('click');
    wrapper.instance().logoutUser(e);
  });
});

describe('## AuthHeader Container', () => {
  const state = {
    openNav: false,
  };
  it('should call mapStateToProps', () => {
    expect(mapStateToProps(state)).toEqual({});
  });
});
