/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var SvcTrackerMixin = require('components/svc/TrackerMixin');

var ButtonGroup = React.createClass({
	mixins: [SvcTrackerMixin],

	getSvcLookup: function() {
		return this.props.interface;
	},

	render: function() {
		var children = this._tracker.map(function(se) {
			return (
				<button
					key={se.service.__registryIdentifier}
					className={"btn " + this.props.btnClassName}>
					<span className={"glyphicon " + se.meta.icon}>
					</span>
					<div className="btn-label">
						{se.meta.label}
					</div>
				</button>
			);
		}, this);

		return this.transferPropsTo(
			<div className="btn-group">
				{children}
			</div>
		);
	}
});

module.exports = ButtonGroup;
