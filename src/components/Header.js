'use strict';

var React = require('react/addons');
var LoremPixel = require('./lib/LoremPixel');

//var Actions = require('actions/xxx')

require('styles/Header.styl');

var Header = React.createClass({

  render: function () {
    return (
        <div className="Header">
          <LoremPixel
            width={300}
            height={50}
            text="Logogogogogo"
            category="abstract" />
        </div>
      );
  }
});

module.exports = Header; 

