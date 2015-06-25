'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/ui/Button.styl');

var Button = React.createClass({

  render: function () {
    return (
        <div className="Button">
          <span className="text">
            {this.props.text}
          </span>
        </div>
      );
  }
});

module.exports = Button; 

