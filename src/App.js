import withRoot from './modules/withRoot'
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProfileAppBar from "./modules/components/appBar/ProfileAppBar";
import AppFooter from "./modules/views/AppFooter";
import MyFeed from "./modules/routes/MyFeed";
import Pictorant from "./modules/routes/Pictorant";

import logo from './logo.svg';
import './App.css';
import HistoryAppBar from "./modules/components/appBar/HistoryAppBar";
import History from "./modules/routes/History";

function Index() {
  return (
      <Router>
          <div>
              <div style={{height: '50px'}}>
                  <Switch>
                      <Route exact path="/myfeed" component={ProfileAppBar} />
                      <Route path='/history' component={HistoryAppBar} />
                  </Switch>
              </div>
              <div>
                  <Switch>
                      <Route exact path="/" component={MyFeed} />
                      <Route path="/myfeed" component={MyFeed} />
                      <Route path="/history" component={History} />
                      <Route path="/pictorant" component={Pictorant} />
                  </Switch>
              </div>
              <AppFooter />
          </div>

      </Router>
  )
}

export default withRoot(Index)
