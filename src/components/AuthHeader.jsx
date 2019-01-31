import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/headers.css';

/**
 * @description The Header component
 */
export default class Header extends Component {
    static propTypes = {
      userName: PropTypes.func,
    };


    // logoutUser() {
    //   localStorage.clear();
    //   this.push.history('/login');
    // }

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
                                <span className="quantity-amount-holder" ></span></a>
                                <a className="fa fa-shopping-cart" href="order-cart.html"></a>
                            </div>
                        </div>
                        <div className="header-bars">
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
                            <a href="order-cart.html">
                            <span className="quantity-amount-holder" ></span></a>
                            <a className="fa fa-shopping-cart" href="/order-cart"></a>
                        </div>
                        <ul className="ul-user">
                            <li className=" .li-user dropdown">
                                <a className="dropbtn">{this.props.userName}
                                    <span>&#9660;</span>
                                </a>
                                <div className="dropdown-content nav-dropdown">
                                    <a href="/menu">Fast Food</a>
                                    <a href="/user-history">Order History</a>
                                    <a className="logout-btn" onClick={this.logoutUser}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <section id="slide-nav" className="nav-dropdown">
            <a href="/menu">Fast Food</a>
            <a href="/user-history">Order History</a>
            <a id="logoutBtn" className="logout-btn" href="login.html">Logout</a>
        </section>
      </Fragment>
      );
    }
}
