/* eslint-disable max-len */
import moxios from 'moxios';
import faker from 'faker';
import * as loginActions from '../login/loginActions';
import * as type from '../authTypes/loginActionTypes';
import HOST from '../../../helpers/hostUrl';

const dispatchFn = jest.fn();
const url = `${HOST}/auth/login`;

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


  it('should call the login start dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const mockResponse = {
      response: {
        data: {
          message: 'hello',
        },
      },
    };

    moxios.stubRequest(url, mockResponse);
    await loginActions.loginUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });

  it('should call the login success dispatch function', async () => {
    const fakeUser = {
      userEmail: 'jdjjd',
      userPassword: 'jdjdjd',
    };
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(url, mockResponse);
    await loginActions.loginUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
    expect(dispatchFn).toBeCalledWith(
      { type: type.LOGIN_SUCCESS },
    );
  });


  it('should call the login failed dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const mockResponse = {
      data: {
        error: 'oopp',
      },
    };

    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await loginActions.loginUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
  });
});
