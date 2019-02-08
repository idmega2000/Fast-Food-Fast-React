
import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { EachMenu, mapDispatchToProps, mapStateToProps } from '../EachMenu';


describe('This test the ViewMenu component', () => {
  let wrapper;

  const props = {
    menuDetails: jest.fn(),
    updateCart: jest.fn(),
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<EachMenu {...props}/>);
  });
  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('test the EachMenu component', () => {
    wrapper.setProps({
      user: {
        userName: 'fastfood',
      },
    });
    const text = wrapper.find('Fragment');
    expect(text.length).toEqual(1);
  });
  it('test the EachMenu component', () => {
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


  it('should click the overlay button', () => {
    wrapper.setState({
      sidenav: true,
    });
    const decrementQuantity = wrapper.find('.decrement-value');
    decrementQuantity.at(0).simulate('click');
  });


  it('should click the overlay button', () => {
    wrapper.setState({
      sidenav: true,
    });
    const incrementQuantity = wrapper.find('.increment-value');
    incrementQuantity.at(0).simulate('click');
  });

  it('should click the overlay button', () => {
    wrapper.setState({
      sidenav: true,
    });
    const addTocart = wrapper.find('.order-btn');
    addTocart.at(0).simulate('click');
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
