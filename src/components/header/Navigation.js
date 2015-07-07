'use strict';

var React = require('react/addons');
var _ = require('lodash');

//var Actions = require('actions/xxx')

require('styles/header/Navigation.styl');

var Navigation = React.createClass({

  menuItems: function() {
    return [
      {title: 'Ciranova for Home Owners'},
      {title: 'Ciranova for Interior Designers'},
      {title: 'Ciranova for Commercial Builders'},
      {title: 'Ciranova for Installers and Site Finishers'}
    ];
  },

  renderMenuItem: function(item) {
    return (
      <li className="main-menu-item" key={_.kebabCase(item.title)}>
        {item.title}
      </li>
    );
  },

  render: function () {
    return (
        <div className="Navigation">
          <nav className="main-menu">
            <ul>
              { _.map(this.menuItems(), this.renderMenuItem) }
            </ul>
          </nav>
        </div>
      );
  }
});

module.exports = Navigation;

