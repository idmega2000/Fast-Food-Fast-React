
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
import AuthHeader from '../../components/AuthHeader';
import Footer from '../../components/Footer';
import viewMenuActions from '../../actions/menu/menuActions';
import EachMenu from './EachMenu';
import getTotalQuantity from '../../helpers/getTotalQuantity';


/**
 * @class
 */
export class ViewMenu extends Component {
  static propTypes = {
    signUpUser: PropTypes.func,
    response: PropTypes.any,
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    user: PropTypes.any,
    id: PropTypes.string,
    viewMenu: PropTypes.func,
    success: PropTypes.bool,
    updateCart: PropTypes.func,
    history: PropTypes.object,
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
    if (!this.props.user) {
      this.props.history.push('/login');
    }
    this.props.viewMenu(token);
    const cartMenuDetails = JSON.parse(localStorage.getItem('menuCart'));
    const totalQuantity = getTotalQuantity(cartMenuDetails);
    this.props.updateCart(totalQuantity);
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
              {!this.props.isLoading ? (
                <div className="container main-body-container">
                {Array.isArray(this.props.response)
                  && this.props.response.map(menu => (
                  <EachMenu key={menu.menu_id} menuDetails={menu} />
                  ))}
                </div>
              ) : (
                <div className='centerdiv clipps'>
                <SyncLoader
                sizeUnit='px'
                size={130}
                color='#fff'
                loading={true}
                  />
              </div>
              )}

          </div>
      <Footer />
    </Fragment>
    );
  }
}


export const mapStateToProps = state => ({
  ...state.menuReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(viewMenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewMenu);
