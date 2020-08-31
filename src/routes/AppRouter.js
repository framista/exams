import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/pages/not-found-page';
import Home from '../components/pages/home';
import About from '../components/pages/about';
import Navbar from '../components/layout/navbar';

const AppRouter = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default AppRouter;
