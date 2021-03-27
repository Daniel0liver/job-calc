import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GridWrapper from 'components/Grid';
import Header from 'components/Header';

import Dashboard from 'pages/Dashboard';

export default function Routes() {
  return (
    <Router>
      <Header />
      <GridWrapper>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </GridWrapper>
    </Router>
  );
}