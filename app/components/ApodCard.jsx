var React = require("react");
var moment = require('moment');

module.exports = React.createClass({
	getApodDate: function() {
		return moment(this.props.apod.date).format("dddd, MMMM Do YYYY");
	},
	render: function() {
		return (
			<div className="card sticky-action">
				<div className="card-image">
					<img className="materialboxed" src={ this.props.apod.url }/>
				</div>
				<div className="card-content">
					<span className="card-title activator">{ this.props.apod.title }<a className="btn-floating btn-small waves-effect waves-light grey darken-4 right"><i className="material-icons right">expand_less</i></a></span>
					<p className="card-date-text">{ this.getApodDate() }</p>
				</div>
				<div className="card-reveal">
			      <span className="card-title">{ this.props.apod.title }<a className="btn-floating btn-small waves-effect waves-light grey darken-4 right"><i className="material-icons right">expand_more</i></a></span>
			      <p className="card-date-text">{ this.getApodDate() }</p>
			      <p className="card-description-text">{ this.props.apod.text }</p>
			      { this.props.apod.copyright ? <div><hr/><p className="copyright-text">Copyright: { this.props.apod.copyright }</p></div> : null }
			    </div>
			    <div className="card-action">
			    	<a href="#">Full post</a>
			    </div>
			</div>
			
		);
	}
});