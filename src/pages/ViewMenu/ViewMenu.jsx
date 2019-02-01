
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthHeader from '../../components/AuthHeader';
import Footer from '../../components/Footer';
import viewMenuActions from '../../actions/ViewMenu/viewMenuActions';
import EachMenu from './EachMenu';
import decodedToken from '../../helpers/decodeUserToken';


/**
 * @class
 */
export class ViewMenu extends Component {
  static propTypes = {
    signUpUser: PropTypes.func,
    response: PropTypes.strianyng,
    error: PropTypes.bool,
    history: PropTypes.object,
    isLoading: PropTypes.bool,
    user: PropTypes.any,
    id: PropTypes.string,
    viewMenu: PropTypes.func,
  }

  static state = {
    error: {},
    user: {
      userEmail: '',
      userPassword: '',
      userName: '',
      confirmPassword: '',
    },
  };


  /**
   * @description react lifecycle for when component mount
   * @return {void} -
   */
  componentDidMount() {
    const token = localStorage.getItem('token');
    const userDetails = decodedToken();
    if (!userDetails) {
      this.props.history.push('/login');
    }
    this.props.viewMenu(token);
  }


  /**
   * @function
   * @returns {JSX} JSX
   */
  render() {
    return (
    <Fragment>
          <AuthHeader userName={this.props.user ? this.props.user.userName : 'user'} />
          <div className="main-body">
                  <div className="search-wrapper container">
                      <div className="search-body">
                          <input className="search-input" type="text"
                          name="searchfood" id="searchFood" placeholder="Search Fast Food" />
                          <i id="filterSearch" className="fa fa-search"></i>
                      </div>
                  </div>
                  <div className="no-menu"></div>
                  <div className="container main-body-container">
                  {Array.isArray(this.props.response)
                    && this.props.response.map(menu => (
                    <EachMenu key={menu.menu_id} menuDetails={menu} />
                    ))}
                  </div>
              </div>
          <Footer />
    </Fragment>
    );
  }
}


export const mapStateToProps = state => ({
  ...state.viewMenuReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(viewMenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewMenu);
