var React = require("react");
var moment = require("moment");

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<p className="ds-apod-cover-date">{moment(this.props.apod.date).format("d/MM/YYYY")}</p>
				<a href="#" className="ds-apod-cover-img">
					<img className="responsive-img" src={this.props.apod.url}/>
				</a>
			</div>
		);
	}
})