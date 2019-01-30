import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';
import '../styles/form.css';


/**
 *
 * @param {JSX} AuthType - The type of Authentication
 * @returns {JSX} The complete Auth component
 */
export default class AuthContainer extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  /**
   * @function
   * @returns {JSX} JSX
   */
  render() {
    return (
      <Fragment>
        <div id="loaderDiv">
          <div id="loaderTop"></div>
          <div className="loader"></div>
        </div>
        <div className="main-body all-login-body">
          <div className="main-im-cov">
            <div className="login-body-wrapper signup-body-wrapper">
              <div className="login-wrapper">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
