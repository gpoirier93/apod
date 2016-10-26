var React = require("react");
var ApodList = require("./ApodList.jsx");
var ApodGallery = require("./ApodGallery.jsx");
var ApodCollection = require("./ApodCollection.jsx");

module.exports = React.createClass({
	loadApodsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return { data: [] };
	},
	componentDidMount:function(){
		this.loadApodsFromServer();
	},
	render: function() {
	    return (
	    	<div className="ds-apod-box row">
	    		<div className="col s12">
		    		<div className="row">
		    			<div className="col s10 offset-s1">
			    			<ul className="tabs z-depth-2">
			    				<li className="tab col s4"><a href="#feed"><i className="material-icons">web_asset</i></a></li>
			    				<li className="tab col s4"><a href="#gallery"><i className="material-icons">view_module</i></a></li>
			    				<li className="tab col s4"><a href="#list"><i className="material-icons">view_list</i></a></li>
			    			</ul>
			    		</div>
			    		<div id="feed" className="col s12"><ApodList data={this.state.data}/></div>
			    		<div id="gallery" className="col s12"><ApodGallery data={this.state.data}/></div>
		      			<div id="list" className="col s12"><ApodCollection data={this.state.data}/></div>
			    	</div>
	      		</div>
	      	</div>
	   	);
	}
});