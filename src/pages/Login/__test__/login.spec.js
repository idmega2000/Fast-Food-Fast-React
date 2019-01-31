import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import {
  Login, mapDispatchToProps, mapStateToProps,
} from '../Login';

describe('This test the Login component', () => {
  let wrapper;

  const props = {
    loginUser: jest.fn(),
    error: false,
    isLoading: false,
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<Login {...props}/>);
  });

  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('test the app component', () => {
    const text = wrapper.find('Header');
    expect(text.length).toEqual(1);
  });

  it('test the app component', () => {
    const text = wrapper.find('AuthContainer');
    expect(text.length).toEqual(1);
  });

  it('test the app component', () => {
    wrapper = shallow(<Login />);
    const text = wrapper.find('#userEmail');
    expect(text.length).toEqual(1);
  });

  it('should return true when error occurs', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
  });

  it('should return false if there is no error', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
  });
});


describe('## Signup Container', () => {
  it('should return updated props', () => {
    const state = {
      loginReducer: { 1: 'hello' },
    };

    expect(
      mapStateToProps(state),
    ).toEqual(state.loginReducer);
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
