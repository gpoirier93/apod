var React = require("react");
var moment = require("moment");

module.exports = React.createClass({
	render: function() {
		var apodNodes = this.props.data.map(function(apod, index) {
			return (
				<a href="#" className="collection-item" key={index}>
					<div className="ds-apod-collection-item ds-flex-parent">
						<h1 className="flow-text ds-apod-collection-item-date">{moment(apod.date).format("DD/MM/YY")}</h1>
						<h1 className="flow-text ds-apod-collection-item-title truncate">{apod.title}</h1>
					</div>
				</a>
			);
		});
		return (
			<div className="row ds-apod-collection">
				<div className="col s12">
					<div className="collection z-depth-1">
						{apodNodes}
					</div>
				</div>
			</div>
		);
	}
});