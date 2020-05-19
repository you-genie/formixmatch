import withRoot from './modules/withRoot'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from "./modules/subviews/AppBar";
import AppFooter from "./modules/subviews/AppFooter";
import Home from "./modules/views/Home";

import logo from './logo.svg';
import './App.css';

function Index() {
  return (
      <Router>
          <div>
              <AppBar />
              <div>
                  <Switch>
                      <Route exact path="/" component={Home} />
                  </Switch>
              </div>
              <AppFooter />
          </div>

      </Router>
  )
}

export default withRoot(Index)
