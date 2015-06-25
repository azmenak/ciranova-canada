'use strict';

describe('LoremPixel', function () {
  var React = require('react/addons');
  var LoremPixel, component;

  beforeEach(function () {
    LoremPixel = require('components/lib/LoremPixel.js');
    component = React.createElement(LoremPixel);
  });

  it('should create a new instance of LoremPixel', function () {
    expect(component).toBeDefined();
  });
});
