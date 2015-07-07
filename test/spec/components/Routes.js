'use strict';

describe('Routes', function () {
  var React = require('react/addons');
  var Routes, component;

  beforeEach(function () {
    Routes = require('components/Routes.js');
    component = React.createElement(Routes);
  });

  it('should create a new instance of Routes', function () {
    expect(component).toBeDefined();
  });
});
