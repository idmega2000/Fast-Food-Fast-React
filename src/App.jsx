import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import './styles/form.css';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup/SignUp';
import Login from './pages/Login/Login';
import store from './store';

const Router = () => (
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={LandingPage}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
  </Provider>
);


export default Router;
