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
		return {data: []};
	},
	componentDidMount:function(){
		this.loadApodsFromServer();
	},
	render: function() {
	    return (
	    	<div className="apodBox row">
	    		<div className="col s12">
		    		<div className="apodBox row">
		    			<div className="col s8 offset-s2">
			    			<ul className="tabs">
			    				<li className="tab col s2"><a href="#"><i className="material-icons">add</i></a></li>
			    				<li className="tab col s2"><a href="#"><i className="material-icons">add</i></a></li>
			    				<li className="tab col s2"><a href="#"><i className="material-icons">add</i></a></li>
			    			</ul>
			    		</div>
			    	</div>
	      			<ApodList data={this.state.data}/>
	      		</div>
	      	</div>
	   	);
	}
});