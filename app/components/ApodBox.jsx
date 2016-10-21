var React = require("react");
var ApodList = require("./ApodList.jsx");

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
	    	<div className="apodBox row">
	    		<div className="col s12">
		    		<div className="row">
		    			<div className="col s8 offset-s2">
			    			<ul className="tabs z-depth-2">
			    				<li className="tab col s2"><a href="#feed"><i className="material-icons">web_asset</i></a></li>
			    				<li className="tab col s2"><a href="#gallery"><i className="material-icons">apps</i></a></li>
			    				<li className="tab col s2"><a href="#list"><i className="material-icons">view_list</i></a></li>
			    			</ul>
			    		</div>
			    		<div id="feed" className="col s12"><ApodList data={this.state.data} type="feed"/></div>
		      			<div id="gallery" className="col s12">gallery</div>
		      			<div id="list" className="col s12">list</div>
			    	</div>
	      		</div>
	      	</div>
	   	);
	}
});