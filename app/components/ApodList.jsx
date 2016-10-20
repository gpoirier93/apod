var React = require("react");
var Apod = require("./Apod.jsx");

module.exports = React.createClass({
	render: function() {
		var apodNodes = this.props.data.map(function(apod, index) {
			return (
				<Apod apod={apod} key={index}></Apod>
			);
		});
		return(
			<div className="row commentList">
				<div className="col s8 offset-s2">
					{apodNodes}
				</div>
			</div>
		);
	}
});