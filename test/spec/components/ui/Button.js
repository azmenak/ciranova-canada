'use strict';

describe('Button', function () {
  var React = require('react/addons');
  var Button, component;

  beforeEach(function () {
    Button = require('components/ui/Button.js');
    component = React.createElement(Button);
  });

  it('should create a new instance of Button', function () {
    expect(component).toBeDefined();
  });
});
