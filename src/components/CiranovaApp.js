'use strict';

var React = require('react/addons');
var Router = require('react-router');

var {
  Link
} = Router;

var Header = require('./Header');
var Routes = require('./Routes')
var Home = require('./Home');

// CSS
require('normalize.css');
require('../styles/main.css');

var CiranovaApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Header />
        {this.props.children || <Home />}
      </div>
    );
  }
});

module.exports = CiranovaApp;
