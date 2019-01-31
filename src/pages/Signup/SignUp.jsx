
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
import signActionCreators from '../../actions/Auth/signup/signUp';
import decodedToken from '../../helpers/decodeUserToken';


/**
 * @class
 */
export class SignUp extends Component {
  static propTypes = {
    signUpUser: PropTypes.func,
    response: PropTypes.string,
    error: PropTypes.bool,
    history: PropTypes.object,
    isLoading: PropTypes.bool,
  }

  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      error: {},
      user: {
        userEmail: '',
        userPassword: '',
        userName: '',
        confirmPassword: '',
      },
    };
  }


  /**
 * @return {void} -
 */
  componentDidMount() {
    const userDetail = decodedToken();
    if (userDetail) {
      this.props.history.push('/menu');
    }
  }

  /**
   * @param {*} e - event
   * @returns {object} - Changed state
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
   * @param {*} e - event
   * @returns {object} - handle submit
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const error = authValidation.authSignup(user);
    if (error) {
      toast.error(error, {
        autoClose: false,
        closeButton: null,
      });
      return false;
    }
    this.props.signUpUser(user, this.props.history);
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
    return true;
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
      <div className="login-form-title">Sign Up</div>
      <div className="input-div">
        <span id="signUpErrorHandler" className="error-hander"> </span>
      </div>
      <div className="input-wrapper">
        <div className="input-div">
          <span>User-Name</span>
          <span className="is-required">*</span>
        </div>
        <input className="user-input" type="text"
        name="username" id="userName" placeholder="Enter Nameame" />
        <i className="fa fa-user filter-user-input"></i>
      </div>
      <div className="input-wrapper">
        <div className="input-div">
          <span>Email</span>
          <span className="is-required">*</span>
        </div>
        <input className="user-input" type="text"
        name="useremail" id="userEmail" placeholder="Enter Email" />
        <i className="fas fa-envelope filter-user-input"></i>
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
      <div className="input-wrapper">
        <div className="input-div">
          <span>Confirm Password</span>
          <span className="required">*</span>
        </div>
        <input className="user-input" type="password" name="cpassword"
        id="confirmPassword" placeholder=" Confirm Password" />
        <i className="fa fa-lock filter-user-input"></i>
      </div>
      {
        !this.props.isLoading ? (
          <div>
          <div className="form-btn">
          <button id="signupBtn" className="signin-btn" type="submit">Sign Up</button>
        </div>
              <div className="other-link">
              <a href="./login">Have an Account? Sign In</a>
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
  ...state.signUpReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(signActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
