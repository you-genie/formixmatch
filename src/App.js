import withRoot from './modules/withRoot'
import React, { Component } from 'react';

import AppBar from "./modules/subviews/AppBar";
import AppFooter from "./modules/subviews/AppFooter";
import Home from "./modules/views/Home";

import logo from './logo.svg';
import './App.css';

function Index() {
  return (
      <React.Fragment>
        <AppBar />
        <Home />
        <AppFooter />
      </React.Fragment>
  )
}

export default withRoot(Index)
