/* eslint-disable react/no-unescaped-entities */
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import AuthContainer from '../../components/AuthContainer';
import Footer from '../../components/Footer';
import authValidation from '../../helpers/authValidation';
import loginActionCreators from '../../actions/Auth/login/loginActions';


/**
 * @class
 */
export class Login extends Component {
    static propTypes = {
      loginUser: PropTypes.func,
      error: PropTypes.bool,
      isLoading: PropTypes.bool,
      history: PropTypes.object,
      user: PropTypes.any,
      success: PropTypes.bool,
      response: PropTypes.any,
    };

    /**
   * @constructor
   */

  state = {
    error: {},
    user: {
      userEmail: '',
      userPassword: '',
    },
  };


  /**
 * @return {void} -
 */
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push('/menu');
    }
  }

  /**
   * @description - decides if component should throw error or update
   * @param {object} nextProps - react next prop to target next prop
   * @returns {bool} - if the component should be updated or not
   */
  shouldComponentUpdate(nextProps) {
    if (this.props.error !== nextProps.error && nextProps.error === true) {
      toast.error(`${nextProps.response}`);
      return true;
    }
    if (nextProps.success === true) {
      window.location.replace('/menu');
    }
    return true;
  }

  /**
   * @param {object} e - The event object to be acted on
   * @returns {void} - signs the user in
   * @description Handles the submission of the login form
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const error = authValidation.authLogin(user);
    if (error) {
      toast.error(error);
      return false;
    }
    this.props.loginUser(this.state.user);
  }

  /**
   * @param {object} e - The Event object
   * @returns {void} - No return
   * @memberof Login
   * @description Handles input changes
   */
  handleChange = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.id]: e.target.value,
      },
    });
  }

  /**
   * @function
   * @returns {JSX} JSX
   */
  render() {
    return (
    <Fragment>
    <Header />
    <AuthContainer>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
                name="Password" id="userPassword" placeholder="Enter Password" />
                <i className="fa fa-lock filter-user-input"></i>
            </div>
            {!this.props.isLoading ? (
                <div>
                <div className="form-btn">
                <button id="loginBtn" className="signin-btn" type="submit">Sign In</button>
                </div>
                <div className="other-link">
                <a href="./signup.html">Don't have an account? Sign Up</a>
            </div>
                </div>
            ) : (
                <div className='centerdiv'>
                <ClipLoader
                sizeUnit='px'
                size={30}
                color='#fff'
                loading={true}
                  />
              </div>
            )
            }

        </form>
    </AuthContainer>
    <Footer />

    </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.loginReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(loginActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
