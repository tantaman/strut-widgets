/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var _ = require('lodash');

require('bootstrap.css');
require('main.css');

var Examples = React.createClass({
	render: function() {
		return (
			<div>
			</div>
		);
	}
});

var Root = require('widgets/Root.jsx');

React.renderComponent(<Root><Examples /></Root>, document.getElementById('content')); // jshint ignore:line

module.exports = Examples;
