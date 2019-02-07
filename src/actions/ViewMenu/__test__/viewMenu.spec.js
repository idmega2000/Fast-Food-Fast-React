
import moxios from 'moxios';
import faker from 'faker';
import * as viewMenuActions from '../viewMenuActions';
import * as type from '../actionTypes';
import HOST from '../../../helpers/hostUrl';

const dispatchFn = jest.fn();
const url = `${HOST}/menu`;
const postUrl = `${HOST}/orders`;

describe('### Viewmenu Act{ions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${type.VIEW_MENU_START} is fired`, () => {
    expect(viewMenuActions.viewMenuStart()).toEqual({
      type: type.VIEW_MENU_START,
    });
  });

  it(`should return an action object once ${type.VIEW_MENU_FAIL} is fired`, () => {
    expect(viewMenuActions.viewMenuFail()).toEqual({
      type: type.VIEW_MENU_FAIL,
    });
  });

  it(`should return an action object once ${type.VIEW_MENU_SUCCESS} is fired`, () => {
    expect(viewMenuActions.viewMenuSuccess()).toEqual({
      type: type.VIEW_MENU_SUCCESS,
    });
  });
  it(`should return an action object once ${type.UPDATE_CART_ICON} is fired`, () => {
    viewMenuActions.updateCartIcon('hello')(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(1);
  });


  it('should call the viewMenu start dispatch function', async () => {
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
    await viewMenuActions.viewMenu(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });


  it('should call the viewMenu success dispatch function', async () => {
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
    await viewMenuActions.viewMenu(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
  });


  it('should call the viewMenu failed dispatch function', async () => {
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
    await viewMenuActions.viewMenu(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
  });

  it('should call the placeOrder start dispatch function', async () => {
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

    moxios.stubRequest(postUrl, mockResponse);
    await viewMenuActions.placeOrder(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });


  it('should call the placeOrder success dispatch function', async () => {
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

    moxios.stubRequest(postUrl, mockResponse);
    await viewMenuActions.placeOrder(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
  });


  it('should call the placeOrder failed dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const mockResponse = {
      data: {
        error: 'oopp',
      },
    };

    moxios.stubRequest(postUrl, { status: 400, response: mockResponse });
    await viewMenuActions.placeOrder(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
  });
});
