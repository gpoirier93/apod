var React = require("react");
var moment = require("moment");
var Constants = require("../constants.js");

module.exports = React.createClass({
	componentDidMount: function() {
		$('.ds-apod-cover').height($('.ds-apod-cover').width());
	},
	render: function() {
		if (this.props.apod.mediaType === Constants.APOD_MEDIA_TYPE_IMAGE) {
			return (
				<div className="ds-apod-cover">
					<div className="ds-apod-cover-content">
						<p className="ds-apod-cover-date flow-text">{moment(this.props.apod.date).format("DD/MM/YY")}</p>
						<a href="#">
							<img className="ds-apod-cover-img responsive-img z-depth-1" src={this.props.apod.url}/>
						</a>
					</div>
				</div>
			);
		} else {
			return (
				<div className="ds-apod-cover">
					<div className="ds-apod-cover-content">
						<p className="ds-apod-cover-date flow-text">{moment(this.props.apod.date).format("DD/MM/YY")}</p>
						<a href="#">
						</a>
					</div>
				</div>
			);
		}
	}
})