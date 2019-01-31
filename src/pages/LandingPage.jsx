/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';

import Header from '../components/Header';
import LandingBody from '../components/LandingBody';
import Footer from '../components/Footer';
import FirstFooter from '../components/FirstFooter';
import AuthHeader from '../components/AuthHeader';
import decodedToken from '../helpers/decodeUserToken';


/**
 * @class
 */
export class LandingPage extends Component {
static state = {
  isLoggedIn: false,
  userDetail: '',
}

/**
 * @return {void} -
 */
componentWillMount() {
  const userDetail = decodedToken();
  if (userDetail) {
    this.setState({
      isLoggedIn: true,
      userDetail,
    });
  }
}


/**
   * @function
   * @returns {JSX} JSX
   */
render() {
  return (
      < div>
      {
        this.state.isLoggedIn ? (
          <AuthHeader userName={this.state.userDetail.userName}/>
        )
          : (<Header />)
      }

      <LandingBody />
      <FirstFooter />
      <Footer />
    </div>
  );
}
}

export default LandingPage;
