import withRoot from './modules/withRoot'
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProfileAppBar from "./modules/components/appBar/ProfileAppBar";
import AppFooter from "./modules/views/AppFooter";
import Baseline from "./modules/routes/Baseline";
import Experiment3 from "./modules/routes/Experiment3";
import Experiment2 from "./modules/routes/Experiment2";
import Experiment4 from "./modules/routes/Experiment4";
import Background from "./modules/routes/Background";
import logo from './logo.svg';
import './App.css';
import HistoryAppBar from "./modules/components/appBar/HistoryAppBar";

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
                      <Route path="/1" component={Baseline} />
                      <Route path="/2" component={Experiment2} />
                      <Route path="/3" component={Experiment3} />
                      <Route path="/4" component={Experiment4} />
                  </Switch>
              </div>
              <AppFooter />
          </div>

      </Router>
    )
}

export default withRoot(Index)
