import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/pages/not-found-page';
import Home from '../components/pages/home';

const AppRouter = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default AppRouter;
