
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
