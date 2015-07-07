'use strict';

var CiranovaApp = require('./CiranovaApp');

var React = require('react/addons');
var ReactRouter = require('react-router');
var { Router, Route } = ReactRouter;
var BrowserHistory = require('react-router/lib/BrowserHistory');

var HomeOwners = require('./HomeOwners');
var Home = require('./Home')

var content = document.getElementById('content');
var routes = {
  path: '/',
  component: CiranovaApp,
  childRoutes: [
    {path: 'home-owners', component: HomeOwners}
  ]
};

// React.render(<Router history={new BrowserHistory()} children={routes} /> , content);
React.render(<CiranovaApp />, content);
