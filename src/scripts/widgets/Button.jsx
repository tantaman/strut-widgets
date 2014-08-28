/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Button = React.createClass({
	render: function() {
		return this.transferPropsTo(
			<button
				type="button"
				className="btn">
				{this.props.children}
			</button>
		);
	}
});

module.exports = Button;