'use strict';

describe('Navigation', function () {
  var React = require('react/addons');
  var Navigation, component;

  beforeEach(function () {
    Navigation = require('components/header/Navigation.js');
    component = React.createElement(Navigation);
  });

  it('should create a new instance of Navigation', function () {
    expect(component).toBeDefined();
  });
});
