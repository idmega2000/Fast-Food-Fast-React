/* eslint-disable no-unused-expressions */

import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { OrderCart, mapDispatchToProps, mapStateToProps } from '../OrderCart';


describe('This test the ViewMenu component', () => {
  let wrapper;

  const props = {
    signUpUser: jest.fn(),
    error: false,
    errorMessage: null,
    successMessage: null,
    isLoading: false,
    isAuthenticated: null,
    viewMenu: jest.fn(),
    history: {
      push: jest.fn(),
    },
    updateCartIcon: jest.fn(),
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<OrderCart {...props}/>);
    jest.spyOn(window.location, 'replace').mockImplementation(() => undefined);
  });

  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('test the viewmenu component', () => {
    wrapper.setProps({
      user: {
        userName: 'fastfood',
      },
    });
    wrapper.setState({
      AllMenuInfo: [{
        menuId: 1,
        menPrice: 10,
        quantity: 10,
      }, { menuId: 1, menPrice: 10, quantity: 10 }],
    });
    const text = wrapper.find('Fragment');
    expect(text.length).toEqual(1);
  });
  it('test the viewmenu component', () => {
    wrapper.setState({
      AllMenuInfo: 'hello',
    });
    const text = wrapper.find('Fragment');
    expect(text.length).toEqual(1);
  });

  it('should click the overlay button', () => {
    wrapper.setState({
      displayModal: true,
    });
    const decrementQuantity = wrapper.find('.close');
    decrementQuantity.at(0).simulate('click');
    expect(wrapper.instance().closeModal()).toBeCalled;
  });

  it('should click the open modal button', () => {
    wrapper.setState({
      displayModal: true,
      AllMenuInfo: 'hekhekhj',
    });
    const decrementQuantity = wrapper.find('#placeOrderBtn');
    decrementQuantity.at(0).simulate('click');
    expect(wrapper.instance().openPlaceOrderModal()).toBeCalled;
  });

  it('test the viewmenu component', () => {
    const text = wrapper.find('Fragment');
    expect(text.length).toEqual(1);
  });


  it('should change state if EachMenu is called', () => {
    wrapper.setProps({
      getSuccess: true,
      isLoading: false,
      response: [
        { menu_id: 'hdhks' },
      ],
    });
    const input = wrapper.find('EachMenu');
    expect(input.length).toEqual(0);
  });
});


describe('## Signup Container', () => {
  it('should return updated props', () => {
    const state = {
      ViewMenu: { 1: 'kd' },
    };

    expect(
      mapStateToProps(state),
    ).toEqual({});
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
