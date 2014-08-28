/**
* @jsx React.DOM
*/
define(['react'],
function(React) {
	var FileInput = React.createClass({

		openFileBrowser: function() {
			this.refs.input.getDOMNode().click();
		},

		render: function() {
			return (
				<div className="wdgt-file-input">
					<input
						type="file"
						className="hidden-file-input"
						ref="input"
						onChange={this.props.onChange}
					/>
					<button
						onClick={this.openFileBrowser}
						className={"btn " + this.props.btnClass}>
						{this.props.label}
					</button>
				</div>
			);
		}
	});

	return FileInput;
});