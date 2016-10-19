var React = require("react");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="card">
				<div className="card-image">
					<img src={this.props.apod.url}/>
					<span className="card-title">{this.props.apod.title}</span>
				</div>
				<div className="card-content">
					<p>{this.props.apod.text}</p>
				</div>
			</div>
		);
	}
});