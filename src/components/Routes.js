'use strict';

var React = require('react/addons');

var ReactRouter = require('react-router');
var { Router, Route } = ReactRouter;
var { history } = require('react-router/lib/BrowserHistory');

var HomeOwners = require('./HomeOwners');
var Home = require('./Home');

var Routes = (
  <Router history={history}>
    <Route path="/" component={Home}>
      <Route path="home-owners" component={HomeOwners} />
    </Route>
  </Router>
);

module.exports = Routes;

