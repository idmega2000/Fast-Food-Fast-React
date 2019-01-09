import React, { Component } from 'react'

import Header from '../components/Header';
import LandingBody from '../components/LandingBody';
import Footer from '../components/Footer';
import FirstFooter from '../components/FirstFooter';

export default class LandingPage extends Component {
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
