/* eslint-disable no-unused-expressions */

import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { EachMenu, mapDispatchToProps, mapStateToProps } from '../EachOrderMenu';


describe('This test the ViewMenu component', () => {
  let wrapper;

  const props = {
    menuDetails: {
      quantity: 10,
    },
    updateCartIcon: jest.fn(),
    handleTotal: jest.fn(),
  };
  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<EachMenu {...props} />);
  });
  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('test the EachMenu component', () => {
    wrapper.setState(
      {
        quantity: 10,
        menuId: 10,
        amenuTotalPrice: 100,
        thisMenu: true,
      },
    );
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

  it('should click to open the delete menu', () => {
    const menuDetails = JSON.stringify([{ menuId: 1 }]);
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => menuDetails);
    wrapper.setState({
      AllMenuInfo: 'hekhekhj',
      thisMenu: true,
    });
    const decrementQuantity = wrapper.find('button.del-meal-btn');
    decrementQuantity.at(0).simulate('click');
    expect(wrapper.instance().handleMenuDelete()).toBeCalled;
  });
  it('should click to open the delete menu', () => {
    const menuDetails = JSON.stringify([{ }]);
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => menuDetails);
    wrapper.setState({
      AllMenuInfo: 'hekhekhj',
      thisMenu: true,
    });
    const button = wrapper.find('button.del-meal-btn');
    button.at(0).simulate('click');
    expect(wrapper.instance().handleMenuDelete()).toBeCalled;
  });
  // it('should call the handleQuantityChange  ', () => {
  //   const menuDetails = JSON.stringify([{ menuId: 1 }]);
  //   wrapper.setState({
  //     menuId: 1,
  //   });
  //   const event = {
  //     preventDefault: jest.fn(),
  //     target: {
  //       options: [
  //         {
  //           value: 0,
  //         },
  //       ],
  //       result: 'something',
  //       files: [
  //         new Blob(),
  //       ],
  //       selectedIndex: 0,
  //       value: '',
  //     },
  //   };
  //   const eventt = { target: { id: 'role', value: 5 } };


  //   jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => menuDetails);
  //   const button = wrapper.find('.menu-select');
  //   button.at(0).simulate('change', { event });
  //   expect(wrapper.instance().handleQuantityChange().toBeCalled);
  // });
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
