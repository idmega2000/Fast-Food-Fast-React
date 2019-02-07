import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import './styles/form.css';
import './styles/modal.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Signup from './pages/Signup/SignUp';
import Login from './pages/Login/Login';
import store from './store';
import ViewMenu from './pages/ViewMenu/ViewMenu';
import OrderCart from './pages/ViewMenu/OrderCart';

const Router = ({ user }) => (
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={props => <LandingPage {...props} user={user} />} />
          <Route exact path='/signup' render={props => <Signup {...props} user={user} />} />
          <Route exact path='/login' render={props => <Login {...props} user={user} />} />
          <Route exact path='/menu' render={props => <ViewMenu {...props} user={user} />} />
          <Route exact path='/order-cart' render={props => <OrderCart {...props} user={user} />} />
        </Switch>
      </BrowserRouter>
  </Provider>
);

Router.propTypes = {
  user: PropTypes.any,
};

export default Router;
