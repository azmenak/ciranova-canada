'use strict';

var _ = require('lodash');
var React = require('react/addons');
var StripeCheckout = require('./StripeCheckout');

var LoremPixel = require('./lib/LoremPixel');
var Button = require('./ui/Button');

//var Actions = require('actions/xxx')

require('styles/Home.styl');

var Home = React.createClass({

  onToken: function(token) {
    console.log(token);
  },

  renderStoreOptions: function() {
    var stores = [
      {city: 'Burlington', name: 'B-Town Hardwood', id: '_b1'},
      {city: 'Mississauga', name: 'Mis wood', id: '_m1'}
    ];
    return _.map(stores, function(store) {
      return (
        <option key={store.id} name={store.name}>{store.city}: {store.name}</option>
      );
    });
  },

  render: function () {
    return (
        <div className="Home">
          <div className="banner">
            <LoremPixel
              height={400}
              width={800}
              category="abstract" />
            <Button text="Buy Wood Care Products" />
            <form>
              <input name="name" placeholder="8================D" />
              <select name="store">
                {this.renderStoreOptions()}
              </select>
            </form>
            <StripeCheckout
              name="Ciranova Canada"
              description="Wood-care subscription"
              image="http://cdn.shopify.com/s/files/1/0212/1814/products/hardwaxoil_magic_large.png?v=1416524151"
              panelLabel="Subscribe"
              amount={2000}
              currency="CAD"
              stripeKey="pk_test_7Eee4PcBGzpQ9y7IRMUlqaOl"
              token={this.onToken} >
            </StripeCheckout>
          </div>
        </div>
      );
  }
});

module.exports = Home;

