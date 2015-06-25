'use strict';

describe('CiranovaApp', function () {
  var React = require('react/addons');
  var CiranovaApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CiranovaApp = require('components/CiranovaApp.js');
    component = React.createElement(CiranovaApp);
  });

  it('should create a new instance of CiranovaApp', function () {
    expect(component).toBeDefined();
  });
});
