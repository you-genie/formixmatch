import withRoot from './modules/withRoot'
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProfileAppBar from "./modules/components/appBar/ProfileAppBar";
import AppFooter from "./modules/views/AppFooter";
import Baseline from "./modules/routes/Baseline";
import ForMixMatch from "./modules/routes/ForMixMatch";
import Background from "./modules/routes/Background";
import logo from './logo.svg';
import './App.css';
import HistoryAppBar from "./modules/components/appBar/HistoryAppBar";
import SelView from "./modules/routes/SelView";

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
                      <Route exact path="/" component={Background} />
                      <Route path="/baseline" component={Baseline} />
                      <Route path="/sel_view" component={SelView} />
                      <Route path="/formixmatch" component={ForMixMatch} />
                  </Switch>
              </div>
              <AppFooter />
          </div>

      </Router>
  )
}

export default withRoot(Index)
