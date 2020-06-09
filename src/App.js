import withRoot from './modules/withRoot'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from "./modules/components/appBar/ProfileAppBar";
import AppFooter from "./modules/views/AppFooter";
import Home from "./modules/routes/MyFeed";
import Pictorant from "./modules/routes/Pictorant";

import logo from './logo.svg';
import './App.css';

function Index() {
  return (
      <Router>
          <div>
              <AppBar />
              <div style={{height: '40%'}}>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/pictorant" component={Pictorant} />
                  </Switch>
              </div>
              <AppFooter />
          </div>

      </Router>
  )
}

export default withRoot(Index)
