import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components';
import {
  DetailMovie,
  Home,
} from './views';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail-movie" component={DetailMovie} />
    </Switch>
  </Router>
);

export default AppRouter;
