import React, { Component, Fragment } from 'react';
import '../styles/headers.css';

/**
 * @description The Header component
 */
export default class Header extends Component {
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
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div id="homecontainer">
                <a href="index.html">
                  <h1>Fast-Food-Fast</h1>
                </a>
              </div>
              <nav className="nav-list">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="pages/signup.html">Signup</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <section id="slide-nav">
          <a href="#">Home</a>
          <a href="pages/login.html">Login</a>
          <a href="pages/signup.html">Signup</a>
        </section>
      </Fragment>
    );
  }
}
