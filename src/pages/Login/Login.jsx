/* eslint-disable react/no-unescaped-entities */
import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import AuthContainer from '../../components/AuthContainer';
import Footer from '../../components/Footer';
import '../../styles/main.css';
import '../../styles/form.css';


/**
 * @class
 */
class SignupForm extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      error: {},
      email: '',
    };
  }


  /**
   *
   * @param {*} e - the objecet to be acted upon
   * @return {void} -
   */
  handleSubmit(e) {
    e.preventDefault();
  }

x

/**
   * @function
   * @returns {JSX} JSX
   */
render() {
  return (
    <Fragment>
    <Header />
    <AuthContainer>
        <form onSubmit="return false;">
            <div className="login-form-title">Login</div>
            <div className="input-div">
                <span id="signUpErrorHandler" className="error-hander"> </span>
            </div>
            <div className="input-wrapper">
                <div className="input-div">
                    <span>Email</span>
                    <span className="is-required">*</span>
                </div>
                <input className="user-input" type="text"
                name="username" id="userEmail" placeholder="Enter Email" />
                <i className="fa fa-user filter-user-input"></i>
            </div>
            <div className="input-wrapper">
                <div className="input-div">
                    <span>Password</span>
                    <span className="required">*</span>
                </div>
                <input className="user-input" type="password"
                name="Password" id="password" placeholder="Enter Password" />
                <i className="fa fa-lock filter-user-input"></i>
            </div>
            <div className="form-btn">
                <button id="loginBtn" className="signin-btn" type="submit">Sign In</button>
            </div>
            <div className="other-link">
                <a href="./signup.html">Don't have an account? Sign Up</a>
            </div>
        </form>
    </AuthContainer>
    <Footer />

    </Fragment>
  );
}
}

export default SignupForm;
