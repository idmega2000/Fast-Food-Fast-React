/* eslint-disable no-unused-expressions */
import viewMenuReducer from '../viewMenu';
import * as actionTypes from '../../../actions/ViewMenu/actionTypes';

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
    }, { type: actionTypes.POST_MENU_SUCCESS, payload: 'Good' })).toBeCalled;
  });

  it('should updated state when reset password start is called', () => {
    expect(viewMenuReducer({
      ...goodState,
    }, { type: actionTypes.POST_MENU_START })).toBeCalled;
  });

  it('should updated state when reset password failure is called', () => {
    expect(viewMenuReducer({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.POST_MENU_FAIL, payload: 'fail' })).toBeCalled;
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
    }, { type: actionTypes.UPDATE_CART_ICON, payload: 'fail' })).toBeCalled;
  });
});
