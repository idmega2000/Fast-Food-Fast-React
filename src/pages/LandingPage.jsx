import React, { Component } from 'react';

import Header from '../components/Header';
import LandingBody from '../components/LandingBody';
import Footer from '../components/Footer';
import FirstFooter from '../components/FirstFooter';

/**
 * @description The Landing page
 */
export default class LandingPage extends Component {
  /**
  * @returns {JSX}- Returns all the landing page components
  */
  render() {
    return (
      < div>
        <Header />
        <LandingBody />
        <FirstFooter />
        <Footer />
      </div>);
  }
}
