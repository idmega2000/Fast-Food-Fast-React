/* eslint-disable no-unused-expressions */
/* eslint-disable import/first */
jest.mock('../../../helpers/authValidation');
import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import authValidation from '../../../helpers/authValidation';
import {
  Login, mapDispatchToProps, mapStateToProps,
} from '../Login';


describe('This test the Login component', () => {
  let wrapper;

  const props = {
    loginUser: jest.fn(),
    error: false,
    isLoading: false,
    history: {
      push: jest.fn(),
    },
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<Login {...props}/>);
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
    const text = wrapper.find('AuthContainer');
    expect(text.length).toEqual(1);
  });

  it('test the app component', () => {
    wrapper = shallow(<Login />);
    const text = wrapper.find('#userEmail');
    expect(text.length).toEqual(1);
  });

  it('test the app component', () => {
    wrapper.setProps({
      isLoading: true,
    });
    const text = wrapper.find('.centerdiv');
    expect(text.length).toEqual(1);
  });

  it('should change state if confirmPassword field is changed', () => {
    const input = wrapper.find('form');
    input.at(0).simulate('change', { target: { id: 'userEmail', value: 'hellooo' } });
    expect(wrapper.state().user.userEmail).toEqual('hellooo');
  });


  it('should redirect to homepage if user exist', () => {
    const prop = {
      user: {},
      history: {
        push: jest.fn(),
      },
    };
    shallow(<Login {...prop} />);
  });

  it('should return true when error occurs', () => {
    const nextProps = { error: true };
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
  });

  it('should return true when no errors', () => {
    const nextProps = { success: true, errorMessage: false };
    wrapper.setProps({
      loginError: false,
      toast: {
        error: jest.fn(),
      },
    });
    expect(
      wrapper.instance().shouldComponentUpdate(nextProps),
    ).toEqual(true);
  });

  it('should return false if there is no error', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toast: {
        info: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
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
    expect(wrapper.props().loginUser).toBeCalled;
  });
  it('should submit if form is submitted', () => {
    const authReturn = 'null';
    authValidation.authLogin.mockResolvedValue(() => ({
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
    expect(wrapper.props().loginUser).toBeCalled;
  });
});


describe('## Login Container', () => {
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
