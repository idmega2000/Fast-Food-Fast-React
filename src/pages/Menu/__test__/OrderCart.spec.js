/* eslint-disable import/first */
/* eslint-disable no-unused-expressions */
jest.mock('../../../helpers/placeOrderValidation');
import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { OrderCart, mapDispatchToProps, mapStateToProps } from '../OrderCart';
import placeOrderValidation from '../../../helpers/placeOrderValidation';


describe('This test the ViewMenu component', () => {
  let wrapper;

  const props = {
    signUpUser: jest.fn(),
    error: false,
    menuDetails: [{
      menuPrice: 1,
      MenuName: 'bkjbf',
    }],
    errorMessage: null,
    successMessage: null,
    isLoading: false,
    isAuthenticated: null,
    viewMenu: jest.fn(),
    history: {
      push: jest.fn(),
    },
    updateCart: jest.fn(),
    placeOrder: jest.fn(),
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<OrderCart {...props}/>);
    jest.useFakeTimers();
    jest.runOnlyPendingTimers();
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

  it('should click to open the delete menu', () => {
    const menuDetails = JSON.stringify([{ }]);
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => menuDetails);
    wrapper.setState({
      displayModal: true,
      orderSuccess: false,
    });
    const e = { target: { id: 'ordererName', value: 'fastfood' } };

    const button = wrapper.find('#ordererName');
    button.at(0).simulate('change', { target: { id: 'orderer', value: 'fastfood' } });
    expect(wrapper.instance().handleInputChange(e)).toBeCalled;
  });
  it('should throw error and not place an order', () => {
    const menuDetails = JSON.stringify([{ menuId: 1, menuPrice: 1, quantity: 1 }]);
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => menuDetails);
    wrapper.setState({
      displayModal: true,
      orderSuccess: false,
    });
    const preventDefault = jest.fn();
    const button = wrapper.find('form');
    button.at(0).simulate('submit', { preventDefault });
    expect(wrapper.instance().handlePlaceOrder).toBeCalled;
  });
  it('should submit and place an order', () => {
    const menuDetails = JSON.stringify([{ menuId: 1, menuPrice: 1, quantity: 1 }]);
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => menuDetails);
    const plcaeReturn = false;
    placeOrderValidation.mockResolvedValue(() => ({
      plcaeReturn,
    }));
    wrapper.setState({
      displayModal: true,
      orderSuccess: false,
    });
    const preventDefault = jest.fn();
    const button = wrapper.find('form');
    button.at(0).simulate('submit', { preventDefault });
    expect(wrapper.instance().handlePlaceOrder).toBeCalled;
  });

  it('should change state if EachOrderMenu is called', () => {
    wrapper.setState({
      AllMenuInfo: [{ menuId: 1, menuPrice: 1, quantity: 1 }],
      menuDetails: [{ menuId: 1 }],
    });
    const input = wrapper.find('.table-row');
    expect(input.length).toEqual(1);
  });
  it('test the ordercart component', () => {
    const text = wrapper.find('Fragment');
    expect(text.length).toEqual(1);
  });


  it('should change state if EachMenu is called', () => {
    wrapper.setProps({
      success: true,
      isLoading: false,
      response: [
        { menu_id: 'hdhks' },
      ],
    });
    const input = wrapper.find('EachMenu');
    expect(input.length).toEqual(0);
  });

  it('should return true when error occurs', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toast: {
        add: () => {},
      },
      error: true,
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
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
