'use strict';

var CiranovaApp = require('./CiranovaApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={CiranovaApp}>
    <Route name="/" handler={CiranovaApp}/>
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});
