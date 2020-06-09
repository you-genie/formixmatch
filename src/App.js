import withRoot from './modules/withRoot'
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProfileAppBar from "./modules/components/appBar/ProfileAppBar";
import AppFooter from "./modules/views/AppFooter";
import Home from "./modules/routes/MyFeed";
import Pictorant from "./modules/routes/Pictorant";

import logo from './logo.svg';
import './App.css';

function Index() {
  return (
      <Router>
          <div>
              <div style={{height: '50px'}}>
                  <Switch>
                      <Route exact path="/" component={ProfileAppBar} />
                  </Switch>
              </div>
              <div>
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
