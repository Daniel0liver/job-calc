import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GridWrapper from 'components/Grid';
import Header from 'components/Header';

import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/SignIn';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <GridWrapper>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
        </GridWrapper>
      </Switch>
    </Router>
  );
}
