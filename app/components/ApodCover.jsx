var React = require("react");
var moment = require("moment");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="ds-apod-cover">
				<p className="ds-apod-cover-date flow-text">{moment(this.props.apod.date).format("DD/MM/YY")}</p>
				<a href="#" className="ds-apod-cover-img">
					<img className="responsive-img z-depth-1" src={this.props.apod.url}/>
				</a>
			</div>
		);
	}
})