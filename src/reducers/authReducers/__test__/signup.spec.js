import signUpReducer from '../signUp/signUpReducer';
import * as actionTypes from '../../../actions/Auth/AuthTypes/signupAuthTypes';

describe('Reset Password Reducers', () => {
  const goodState = {
    isLoading: false,
    response: null,
    error: null,
    success: null,
  };

  it('should update state when reset password success is called', () => {
    expect(signUpReducer({
      ...goodState,
    }, { type: actionTypes.SIGN_UP_SUCCESS, payload: 'Good' })).toEqual({
      isLoading: false,
      response: 'Good',
      error: null,
      success: true,
    });
  });

  it('should updated state when reset password start is called', () => {
    expect(signUpReducer({
      ...goodState,
    }, { type: actionTypes.SIGN_UP_START })).toEqual({
      isLoading: true,
      response: null,
      error: false,
      success: null,
    });
  });

  it('should updated state when reset password failure is called', () => {
    expect(signUpReducer({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.SIGN_UP_FAIL, payload: 'fail' })).toEqual({
      isLoading: false,
      response: 'fail',
      error: true,
      success: null,
    });
  });
});
