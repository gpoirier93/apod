var React = require("react");
var ApodCover = require("./ApodCover.jsx");

module.exports = React.createClass({
	render: function() {
		var apodNodes = this.props.data.map(function(apod, index) {
			return (
				<div className="col s12 m6 l4" key={index}>
					<ApodCover apod={apod}/>
				</div>
			);
		});
		return(
			<div className="row apodGallery">
				{apodNodes}
			</div>
		);
	}
})