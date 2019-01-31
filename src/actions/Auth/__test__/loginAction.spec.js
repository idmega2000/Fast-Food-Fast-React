/* eslint-disable max-len */
import moxios from 'moxios';
import * as loginActions from '../login/loginActions';
import * as type from '../AuthTypes/loginActionTypes';

const dispatchFn = jest.fn();

describe('Login Act{ions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${type.LOGIN_START} is fired`, () => {
    expect(loginActions.loginStart()).toEqual({
      type: type.LOGIN_START,
    });
  });

  it(`should return an action object once ${type.LOGIN_FAIL} is fired`, () => {
    expect(loginActions.loginFail()).toEqual({
      type: type.LOGIN_FAIL,
    });
  });

  it(`should return an action object once ${type.LOGIN_SUCCESS} is fired`, () => {
    expect(loginActions.loginSuccess()).toEqual({
      type: type.LOGIN_SUCCESS,
    });
  });


  //   it('should call the login start dispatch function', async () => {
  //     const fakeUser = {
  //       email: 'shola@gmail.com',
  //       password: 'jdjdjd',
  //     };
  //     const mockResponse = {
  //       response: {
  //         data: {
  //           error: 'error',
  //         },
  //       },
  //     };

  //     moxios.stubRequest(url, mockResponse);
  //     await loginActions.loginUser(fakeUser)(dispatchFn);
  //     expect(dispatchFn).toBeCalled();
  //     expect(dispatchFn).toBeCalledWith({ type: type.LOGIN_START });
  //   });

  //   it('should call the login success dispatch function', async () => {
  //     const fakeUser = {
  //       email: 'shola@gmail.com',
  //       password: 'jdjjnkmndjd',
  //     };
  //     const mockResponse = {
  //       response: {
  //         data: {
  //           error: 'error',
  //         },
  //       },
  //     };

  //     moxios.stubRequest(url, { status: 200, response: mockResponse });
  //     await loginActions.loginUser(fakeUser, { push() {} })(dispatchFn);
  //     expect(dispatchFn).toBeCalledWith(
  //       { type: type.LOGIN_SUCCESS, payload: mockResponse.response },
  //     );
  //   });

  //   it('should call the login failed dispatch function', async () => {
  //     const fakeUser = {
  //       email: 'shola@gmail.com',
  //       password: 'jdjdjhkjhkd',
  //     };

//     moxios.stubRequest(url, { status: 400 });
//     await loginActions.loginUser(fakeUser, { push() {} })(dispatchFn);
//     expect(dispatchFn).toBeCalled();
//   });
});
