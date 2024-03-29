'use strict';

var React = require('react/addons');
var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

require('styles/StripeCheckout.styl');

var ReactStripeCheckout = React.createClass({

  mixins: [ReactScriptLoaderMixin],

  getDefaultProps: function() {
    return {
      className: 'StripeCheckout'
    };
  },

  propTypes: {
    // If included, will render the default blue button with label text.
    // (Requires including stripe-checkout.css or adding the .styl file
    // to your pipeline)
    label: React.PropTypes.string,

    // Show a loading indicator
    showLoadingDialog: React.PropTypes.func,
    // Hide the loading indicator
    hideLoadingDialog: React.PropTypes.func,

    // Run this method when the scrupt fails to load. Will run if the internet
    // connection is offline when attemting to load the script.
    onScriptError: React.PropTypes.func,

    // =====================================================
    // Required by stripe
    // see Stripe docs for more info:
    //   https://stripe.com/docs/checkout#integration-custom
    // =====================================================

    // Your publishable key (test or live).
    // can't use "key" as a prop in react, so have to change the keyname
    stripeKey: React.PropTypes.string.isRequired,

    // The callback to invoke when the Checkout process is complete.
    //   function(token)
    //     token is the token object created.
    //     token.id can be used to create a charge or customer.
    //     token.email contains the email address entered by the user.
    token: React.PropTypes.func.isRequired,

    // ==========================
    // Highly Recommended Options
    // ==========================

    // Name of the company or website.
    name: React.PropTypes.string,

    // A description of the product or service being purchased.
    description: React.PropTypes.string,

    // A relative URL pointing to a square image of your brand or product. The
    // recommended minimum size is 128x128px. The recommended image types are
    // .gif, .jpeg, and .png.
    image: React.PropTypes.string,

    // The amount (in cents) that's shown to the user. Note that you will still
    // have to explicitly include it when you create a charge using the API.
    amount: React.PropTypes.number,

    // ==============
    // Optional Props
    // ==============

    // The currency of the amount (3-letter ISO code). The default is USD.
    currency: React.PropTypes.oneOf([
      'AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD',
      'BDT','BGN','BIF','BMD','BND','BOB','BRL','BSD','BWP','BZD','CAD','CDF',
      'CHF','CLP','CNY','COP','CRC','CVE','CZK','DJF','DKK','DOP','DZD','EEK',
      'EGP','ETB','EUR','FJD','FKP','GBP','GEL','GIP','GMD','GNF','GTQ','GYD',
      'HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','ISK','JMD','JPY','KES',
      'KGS','KHR','KMF','KRW','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTL',
      'LVL','MAD','MDL','MGA','MKD','MNT','MOP','MRO','MUR','MVR','MWK','MXN',
      'MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','PAB','PEN','PGK','PHP',
      'PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SEK',
      'SGD','SHP','SLL','SOS','SRD','STD','SVC','SZL','THB','TJS','TOP','TRY',
      'TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VND','VUV','WST','XAF',
      'XCD','XOF','XPF','YER','ZAR','ZMW'
    ]),

    // The label of the payment button in the Checkout form (e.g. “Subscribe”,
    // “Pay {{amount}}”, etc.). If you include {{amount}}, it will be replaced
    // by the provided amount. Otherwise, the amount will be appended to the
    // end of your label.
    panelLabel: React.PropTypes.string,

    // Specify whether Checkout should validate the billing ZIP code (true or
    // false)
    zipCode: React.PropTypes.bool,

    // Specify whether Checkout should validate the billing ZIP code (true or
    // false). The default is false.
    email: React.PropTypes.string,

    // Specify whether to include the option to "Remember Me" for future
    // purchases (true or false). The default is true.
    allowRememberMe: React.PropTypes.bool,

    // Specify whether to accept Bitcoin in Checkout. The default is false.
    bitcoin: React.PropTypes.bool,

    // function() The callback to invoke when Checkout is opened (not supported
    // in IE6 and IE7).
    opened: React.PropTypes.func,

    // function() The callback to invoke when Checkout is closed (not supported
    // in IE6 and IE7).
    closed: React.PropTypes.func
  },

  getInitalState: function() {
    return {
      scriptLoading: true,
      scriptLoadError: false
    };
  },

  // Used by scriptLoader mixin
  getScriptURL: function() {
    return 'https://checkout.stripe.com/checkout.js';
  },

  statics: {
    stripeHandler: null,
    scriptDidError: false,
  },

  hasPendingClick: false,
  config: {},

  onScriptLoaded: function() {
    // Initialize the Stripe handler on the first onScriptLoaded call.
    // This handler is shared by all StripeButtons on the page.
    if (!ReactStripeCheckout.stripeHandler) {
      this.config.key = this.props.stripeKey;
      var options = [
        'token', 'image', 'name', 'description', 'amount', 'currency', 'closed',
        'panelLabel', 'zipCode', 'email', 'allowRememberMe', 'bitcoin', 'opened',
      ];
      for (var i=0; i<options.length; i++) {
        var key = options[i];
        if (key in this.props) {
          this.config[key] = this.props[key];
        }
      }
      ReactStripeCheckout.stripeHandler = StripeCheckout.configure(this.config);
      if (this.hasPendingClick) {
        this.showStripeDialog();
      }
    }
  },

  showLoadingDialog: function() {
    this.props.showLoadingDialog &&
      this.props.showLoadingDialog.apply(this, arguments);
  },
  hideLoadingDialog: function() {
    this.props.hideLoadingDialog &&
      this.props.hideLoadingDialog.apply(this, arguments);
  },

  showStripeDialog: function() {
    this.hideLoadingDialog();
    ReactStripeCheckout.stripeHandler.open(this.config);
  },
  onScriptError: function() {
    this.hideLoadingDialog();
    ReactStripeCheckout.scriptDidError = true;
    this.props.onScriptError &&
      this.props.onScriptError.apply(this);
  },
  onClick: function() {
    if (ReactStripeCheckout.scriptDidError) {
      console.log('failed to load script');
    } else if (ReactStripeCheckout.stripeHandler) {
      this.showStripeDialog();
    } else {
      this.showLoadingDialog();
      this.hasPendingClick = true;
    }
  },

  renderStripeButton: function() {
    return (
      <button className="stripe-checkout-button" onClick={this.onClick}>
        <span className="inner-text">{this.props.label || 'Pay With Card'}</span>
      </button>
    );
  },

  render: function () {
    return (
      !this.props.children ? this.renderStripeButton() : (
        <span {...this.props} onClick={this.onClick}>
          {this.props.children}
        </span>
      )
    );
  }
});

module.exports = ReactStripeCheckout;

