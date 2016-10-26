var React = require("react");
var ApodCover = require("./ApodCover.jsx");

module.exports = React.createClass({
	render: function() {
		var apodNodes = this.props.data.map(function(apod, index) {
			return (
				<ApodCover apod={apod} key={index}/>
			);
		});
		return(
			<div className="row ds-apod-gallery">
				<div className="col s12 ds-flex-parent-wrap">
					{apodNodes}
				</div>
			</div>
		);
	}
})