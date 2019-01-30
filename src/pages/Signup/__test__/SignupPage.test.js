import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import { SignUp, mapDispatchToProps, mapStateToProps } from '../SignUp';

describe('This test the signup component', () => {
  let wrapper;

  const props = {
    signUpUser: jest.fn(),
    error: false,
    errorMessage: null,
    successMessage: null,
    isLoading: false,
    isAuthenticated: null,
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<SignUp {...props}/>);
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
    wrapper = shallow(<SignUp />);
    const text = wrapper.find('#userName');
    expect(text.length).toEqual(1);
  });


  // it('should change state if firstName field is changed', () => {
  //   const input = wrapper.find('#userEmail');
  //   input.at(0).simulate('change', { target: { id: 'userName', value: 'idris' } });
  //   expect(wrapper.state().user.userName).toEqual('idris');
  // });


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
