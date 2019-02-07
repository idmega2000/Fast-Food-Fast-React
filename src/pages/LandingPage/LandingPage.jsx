
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import AuthHeader from '../../components/AuthHeader';
import LandingBody from '../../components/LandingBody';
import Footer from '../../components/Footer';
import FirstFooter from '../../components/FirstFooter';


/**
 * @class
 */
export class LandingPage extends Component {
  static propTypes = {
    user: PropTypes.any,
  };

static state = {
  isLoggedIn: false,
  userDetail: '',

}


/**
   * @function
   * @returns {JSX} JSX
   */
render() {
  return (
      < div>
      {
        this.props.user ? (
          <AuthHeader userName={this.props.user.userName} />
        ) : (
          <Header />
        )
      }
      <LandingBody />
      <FirstFooter />
      <Footer />
    </div>
  );
}
}

export default LandingPage;
