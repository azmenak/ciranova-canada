'use strict';

describe('HomeOwners', function () {
  var React = require('react/addons');
  var HomeOwners, component;

  beforeEach(function () {
    HomeOwners = require('components/HomeOwners.js');
    component = React.createElement(HomeOwners);
  });

  it('should create a new instance of HomeOwners', function () {
    expect(component).toBeDefined();
  });
});
