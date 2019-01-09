import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './../pages/LandingPage';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>>
        <Route exact path='/' component={LandingPage}/>
      </Switch>
    </BrowserRouter>
  );
} 

export default Router;
