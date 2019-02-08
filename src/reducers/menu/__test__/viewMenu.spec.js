/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
import viewMenuReducer from '../menuReducer';
import * as actionTypes from '../../../actions/menu/actionTypes';

describe('Reset Password Reducers', () => {
  const goodState = {
    isLoading: false,
    response: null,
    error: null,
    success: null,
    cartOrderQuantity: null,
    placeLoading: null,
  };

  it('should update state when reset password success is called', () => {
    expect(viewMenuReducer({
      ...goodState,
    }, { type: actionTypes.PLACE_ORDER_SUCCESS, payload: 'Good' })).toBeCalled;
  });

  it('should updated state when reset password start is called', () => {
    expect(viewMenuReducer({
      ...goodState,
    }, { type: actionTypes.PLACE_ORDER_START })).toBeCalled;
  });

  it('should updated state when reset password failure is called', () => {
    expect(viewMenuReducer({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.PLACE_ORDER_FAIL, payload: 'fail' })).toBeCalled;
  });
  it('should update state when reset password success is called', () => {
    expect(viewMenuReducer({
      ...goodState,
    }, { type: actionTypes.VIEW_MENU_SUCCESS, payload: 'Good' })).toBeCalled;
  });

  it('should updated state when reset password start is called', () => {
    expect(viewMenuReducer({
      ...goodState,
    }, { type: actionTypes.VIEW_MENU_START })).toBeCalled;
  });

  it('should updated state when reset password failure is called', () => {
    expect(viewMenuReducer({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.VIEW_MENU_FAIL, payload: 'fail' })).toBeCalled;
  });

  it('should updated state when reset password failure is called', () => {
    expect(viewMenuReducer({
      isLoading: false,
      response: null,
      error: null,
      success: null,
      cartOrderQuantity: null,
    }, { type: actionTypes.UPDATE_CART, payload: 'fail' })).toBeCalled;
  });
});
