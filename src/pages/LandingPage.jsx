import React from 'react';

import Header from '../components/Header';
import LandingBody from '../components/LandingBody';
import Footer from '../components/Footer';
import FirstFooter from '../components/FirstFooter';


/**
* @description The Landing page
* @returns {JSx} All the landing page components
*/
const LandingPage = () => < div>
  <Header />
  <LandingBody />
  <FirstFooter />
  <Footer />
</div>;

export default LandingPage;
