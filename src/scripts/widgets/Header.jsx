/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Header = React.createClass({
	render: function() {
		return (
			<nav
				className="navbar navbar-default navbar-static-top"
				role="navigation">
				<div className="container-fluid">
					{this.props.children}
				</div>
			</nav>
		);
	}
});

Header.Brand = React.createClass({
	render: function() {
		return (
			<div className="navbar-header">
				<a
					href={this.props.href}
					className="navbar-brand">
					{this.props.children}
				</a>
			</div>
		);
	}
});

module.exports = Header;