'use strict';

var React = require('react/addons');

var Header = require('./Header');
var Home = require('./Home');

// CSS
require('normalize.css');
require('../styles/main.css');

var CiranovaApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Header />
        <Home />
      </div>
    );
  }
});

module.exports = CiranovaApp;
