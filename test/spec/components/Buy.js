'use strict';

describe('Buy', function () {
  var React = require('react/addons');
  var Buy, component;

  beforeEach(function () {
    Buy = require('components/Buy.js');
    component = React.createElement(Buy);
  });

  it('should create a new instance of Buy', function () {
    expect(component).toBeDefined();
  });
});
