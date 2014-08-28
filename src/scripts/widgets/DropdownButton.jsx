/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var EventBus = require('events/EventBus');

var DropdownButton = React.createClass({
	getInitialState: function() {
		return {
			dropped: false
		};
	},

	componentDidMount: function() {
		EventBus.on('react.root.event.onClick', this.onDocClick);
	},

	componentWillUnmount: function() {
		EventBus.off(null, null, this);
	},

	render: function() {
		var menu = this.props.children[1];
		if (this.state.dropped) {
			var open = ' open';
		} else {
			var open = '';
		}

		return this.transferPropsTo(
			<div className={"btn-group" + open} onClick={this.onClick}>
				{this.props.children[0]}
				{menu}
			</div>
		);
	},

	onClick: function(e) {
		e.nativeEvent.stopPropagation();
		this.setState({
			dropped: !this.state.dropped
		});

		return false;
	},

	onDocClick: function() {
		if (this.state.dropped) {
			this.setState({
				dropped: false
			});
		}
	}
});

DropdownButton.Options = React.createClass({
	render: function() {
		return (
			<div className="dropdown-menu" role="menu">
				{this.props.children}
			</div>
		);
	}
});

module.exports = DropdownButton;