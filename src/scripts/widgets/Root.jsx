/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var EventBus = require('events/EventBus');
require('widgets/main.css');

var Root = React.createClass({
	onClick: function(e) {
		EventBus.trigger('react.root.event.onClick', e);
	},

	render: function() {
		return (
			<div onClick={this.onClick} className="wdgt-root">
				{this.props.children}
			</div>
		);
	}
});

module.exports = Root;