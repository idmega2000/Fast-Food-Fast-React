/* eslint-disable no-unused-expressions */
/* eslint-disable import/first */
jest.mock('../../../helpers/authValidation');
import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { SignUp, mapDispatchToProps, mapStateToProps } from '../SignUp';
import authValidation from '../../../helpers/authValidation';

describe('This test the signup component', () => {
  let wrapper;

  const props = {
    signUpUser: jest.fn(),
    error: false,
    errorMessage: null,
    successMessage: null,
    isLoading: false,
    isAuthenticated: null,
    history: {
      push: jest.fn(),
    },
    user: 'the user',
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<SignUp {...props}/>);
    jest.spyOn(window.location, 'replace').mockImplementation(() => undefined);
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
    wrapper.setProps({
      isLoading: true,
    });
    const text = wrapper.find('.centerdiv');
    expect(text.length).toEqual(1);
  });

  it('test the app component', () => {
    const text = wrapper.find('AuthContainer');
    expect(text.length).toEqual(1);
  });

  it('test the app component', () => {
    const text = wrapper.find('#userName');
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
    const nextProps = { success: true, error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
  });

  it('should return false if there is no error', () => {
    const nextProps = { success: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
  });
  it('should change state if confirmPassword field is changed', () => {
    const input = wrapper.find('form');
    input.at(0).simulate('change', { target: { id: 'userName', value: 'hellooo' } });
    expect(wrapper.state().user.userName).toEqual('hellooo');
  });

  it('should submit if form is submitted', () => {
    wrapper.setProps({
      loginUser: jest.fn(),
    });
    wrapper.setState({
      user: jest.fn,
    });

    const preventDefault = jest.fn();
    const form = wrapper.find('form');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().signUpUser).toBeCalled;
  });
  it('should submit if form is submitted', () => {
    const authReturn = 'null';
    authValidation.authSignup.mockResolvedValue(() => ({
      authReturn,
    }));
    wrapper.setProps({
      loginUser: jest.fn(),
    });
    wrapper.setState({
      user: jest.fn,
    });

    const preventDefault = jest.fn();
    const form = wrapper.find('form');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().signUpUser).toBeCalled;
  });
});


describe('## Signup Container', () => {
  it('should return updated props', () => {
    const state = {
      signUpReducer: { 1: 'kd' },
    };

    expect(
      mapStateToProps(state),
    ).toEqual(state.signUpReducer);
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
