'use strict';

var React = require('react/addons');

var LoremPixel = require('./lib/LoremPixel');
var Button = require('./ui/Button');

//var Actions = require('actions/xxx')

require('styles/Home.styl');

var Home = React.createClass({

  render: function () {
    return (
        <div className="Home">
          <div className="banner">
            <LoremPixel
              height={400}
              width={800}
              category="abstract" />
            <Button text="Buy Wood Care Products" />
          </div>
        </div>
      );
  }
});

module.exports = Home;

