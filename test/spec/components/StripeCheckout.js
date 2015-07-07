'use strict';

describe('StripeCheckout', function () {
  var React = require('react/addons');
  var StripeCheckout, component;

  beforeEach(function () {
    StripeCheckout = require('components/StripeCheckout.js');
    component = React.createElement(StripeCheckout);
  });

  it('should create a new instance of StripeCheckout', function () {
    expect(component).toBeDefined();
  });
});
