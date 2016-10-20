var React = require("react");
var ReactDOM = require("react-dom");
var ApodBox = require("./components/ApodBox.jsx");

function render(){
    ReactDOM.render(<ApodBox url="/apod"/>, document.getElementById("container"));    
}
render();