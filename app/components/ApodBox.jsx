var React = require("react");
var ApodList = require("./ApodList.jsx");

var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
		// $.ajax({
		// 	url: this.props.url,
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: function(data) {
		// 		this.setState({data: data});
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.error(this.props.url, status, err.toString());
		// 	}.bind(this)
		// });
		
		this.setState({data: data});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount:function(){
		this.loadCommentsFromServer();
		// setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
  handleCommentSubmit: function(comment) {
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(this.props.url, status, err.toString());
    //   }
    // });
  },
	render: function() {
    return (
    	<div className="apodBox">
      		<ApodList data={this.state.data}/>
      	</div>
   	);
	}
});