/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var SvcTrackerMixin = require('components/svc/TrackerMixin');

var MenuSection = React.createClass({
	mixins: [SvcTrackerMixin],

	getSvcLookup: function() {
		return this.props.interface;
	},

	render: function() {
		var children = this._tracker.map(function(se) {
			return (
				<li key={se.service.__registryIdentifier}>
					<a href="#!">{se.meta.label}</a>
				</li>
			);
		});
		return (
			<ul>
				{children}
			</ul>
		);
	}
});

module.exports = MenuSection;