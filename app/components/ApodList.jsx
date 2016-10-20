var React = require("react");
var ApodCard = require("./ApodCard.jsx");

module.exports = React.createClass({
	enableMaterialBoxedContent: function() {
		$(document).ready(function(){
			$('.materialboxed').materialbox();
		});
	},
	componentDidUpdate: function(){
		this.enableMaterialBoxedContent();
	},
	render: function() {
		var apodNodes = this.props.data.map(function(apod, index) {
			return (
				<ApodCard apod={apod} key={index}></ApodCard>
			);
		});
		return(
			<div className="row commentList">
				<div className="col s10 offset-s1">
					{apodNodes}
				</div>
			</div>
		);
	}
});