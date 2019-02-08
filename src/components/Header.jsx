import React, { Component, Fragment } from 'react';
import '../styles/headers.css';

/**
 * @description The Header component
 */
export default class Header extends Component {
  state= {
    openNav: false,
  }

  /**
   * @returns {void} -
   */
  handleOpenNavBar =() => {
    this.setState({
      openNav: !this.state.openNav,
    });
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
              <div onClick={this.handleOpenNavBar} id="header-sm-sc">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div id="homecontainer">
                <a href="/">
                  <h1>Fast-Food-Fast</h1>
                </a>
              </div>
              <nav className="nav-list">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/signup">Signup</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {
            this.state.openNav ? (
              <section id="slide-nav">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
            </section>
            ) : (
              null
            )
        }

      </Fragment>
    );
  }
}
