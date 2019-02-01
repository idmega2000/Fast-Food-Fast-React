import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import './styles/form.css';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup/SignUp';
import Login from './pages/Login/Login';
import store from './store';
import ViewMenu from './pages/ViewMenu/ViewMenu';

const Router = ({ user }) => (
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={LandingPage}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/menu' render={props => <ViewMenu {...props} user={user} />} />
        </Switch>
      </BrowserRouter>
  </Provider>
);

Router.propTypes = {
  user: PropTypes.any,
};

export default Router;
