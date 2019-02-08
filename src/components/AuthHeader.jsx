import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/headers.css';

/**
 * @description The Header component
 * @class
 */
export class AuthHeader extends Component {
    static propTypes = {
      userName: PropTypes.string,
      cartOrderQuantity: PropTypes.any,
    };

    state = {
      openNav: false,
    }


    handleOpenNavBar =() => {
      this.setState({
        openNav: !this.state.openNav,
      });
    }

    /**
     *
     * @param {*} e The event to be acted upon
     * @returns {void} -
     */
    logoutUser(e) {
      e.preventDefault();
      localStorage.clear();
      window.location.replace('/');
    }

    /**
  * @returns {JSX}- Returns the header jsx
  */
    render() {
      return (
      <Fragment>
        <header>
            <div className="nav">
                <div className="header-container">
                    <div id="header-sm-sc">
                        <div className="small-header-cart">
                            <div className="shopping-cart">
                                <a href="/order-cart">
                                <span className="quantity-amount-holder" >
                                </span>{this.props.cartOrderQuantity}</a>
                                <a className="fa fa-shopping-cart" href="order-cart"></a>
                            </div>
                        </div>
                        <div onClick={this.handleOpenNavBar} className="header-bars">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div id="homecontainer">
                        <a href="/">
                            <h1>Fast-Food-Fast</h1>
                        </a>
                    </div>
                    <nav className="nav-list">
                        <div className="shopping-cart">
                            <a href="order-cart">
                            <span className="quantity-amount-holder" >
                            </span>{this.props.cartOrderQuantity}</a>
                            <a className="fa fa-shopping-cart" href="/order-cart"></a>
                        </div>
                        <ul className="ul-user">
                            <li className=" .li-user dropdown">
                                <a className="dropbtn">{this.props.userName}
                                    <span>&#9660;</span>
                                </a>
                                <div className="dropdown-content nav-dropdown">
                                    <a href="/menu">Menu</a>
                                    <a href="/user-history">Order History</a>
                                    <a className="logout-btn" href='#'
                                    onClick={this.logoutUser}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        {
            this.state.openNav ? (
                <section id="slide-nav" className="nav-dropdown">
                <a href="/menu">Menu</a>
                <a href="/user-history">Order History</a>
                <a id="logoutBtn" href='#'
                onClick={this.logoutUser} className="logout-btn">Logout</a>
            </section>
            ) : (
              null
            )
        }
      </Fragment>
      );
    }
}

export const mapStateToProps = state => ({
  ...state.menuReducer,
});

export default connect(mapStateToProps)(AuthHeader);
