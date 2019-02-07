import moxios from 'moxios';
import * as types from '../AuthTypes/signupAuthTypes';
import * as signupActions from '../signup/signUp';
import HOST from '../../../helpers/hostUrl';

const url = `${HOST}/auth/signup`;
const dispatchFn = jest.fn();
describe('### SignupActions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an action if signUpStart is triggered', () => {
    expect(signupActions.signUpStart()).toEqual({
      type: types.SIGN_UP_START,
    });
  });

  it('should return an action if signupSuccess is triggered', () => {
    expect(signupActions.signUpSuccess('response')).toEqual({
      type: types.SIGN_UP_SUCCESS,
      payload: 'response',
    });
  });

  it('should return an action if signUpFailure is triggered', () => {
    expect(signupActions.signUpFail('response')).toEqual({
      type: types.SIGN_UP_FAIL,
      payload: 'response',
    });
  });

  it('should call the login start dispatch function', async () => {
    const fakeUser = {
      email: 'jdjjd',
      password: 'jdjdjd',
    };
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(url, mockResponse);
    await signupActions.signUpUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: types.SIGN_UP_START });
  });

  it('should call the login success dispatch function', async () => {
    const fakeUser = {
      email: 'jdjjd',
      password: 'jdjdjd',
    };
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(url, { status: 200, response: mockResponse });
    await signupActions.signUpUser(fakeUser, { push() {} })(dispatchFn);
    expect(dispatchFn).toBeCalledWith(
      { type: types.SIGN_UP_SUCCESS },
    );
  });

  it('should call the login failed dispatch function', async () => {
    const fakeUser = {
      userName: 'jdjjd',
      userEmail: 'example@example.com',
      userPassword: 'jdjdjd',
    };
    const mockResponse = {
      response: {
        data: {
          error: 'Ops',
        },
      },
    };

    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await signupActions.signUpUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(6);
  });
});
