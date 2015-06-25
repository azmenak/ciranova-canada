'use strict';

var React = require('react/addons');

require('styles/lib/LoremPixel.styl');

var LoremPixel = React.createClass({

  getDefaultProps: function() {
    return {
      gray: false,
      height: 200,
      width: 200
    };
  },

  propTypes: {
    gray: React.PropTypes.bool,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    category: React.PropTypes.oneOf([
      'abstract',
      'city',
      'people',
      'transport',
      'animals',
      'food',
      'nature',
      'business',
      'nightlife',
      'sports',
      'cats',
      'fashion',
      'technics'
    ]),
    index: React.PropTypes.number,
    text: React.PropTypes.string
  },

  generateLoremURL: function() {
    var base = 'http://lorempixel.com/';
    var path = [];

    if (this.props.gray) { path.push('g'); }

    path.push(this.props.width);
    path.push(this.props.height);

    if (this.props.category) { path.push(this.props.category); }
    if (this.props.index) { path.push(`#{this.props.index}`); }
    if (this.props.text) { path.push(this.props.text); }

    return base + path.join('/');
  },

  render: function () {
    return (
        <img
          className="LoremPixel"
          src={this.generateLoremURL()}
          height={this.props.height}
          width={this.props.width} />
      );
  }
});

module.exports = LoremPixel;

