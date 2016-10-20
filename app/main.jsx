var React = require("react");
var ReactDOM = require("react-dom");
var ApodList = require("./components/ApodList.jsx");
                
var data = [{
	date: "2016-10-19",
	title: "M45: The Pleiades Star Cluster",
	text: "Have you ever seen the Pleiades star cluster? Even if you have, you probably have never seen it as dusty as this. Perhaps the most famous star cluster on the sky, the bright stars of the Pleiades can be seen without binoculars even from the heart of a light-polluted city.  With a long exposure from a dark location, though, the dust cloud surrounding the Pleiades star cluster becomes very evident. The featured image was a long duration exposure taken last month from Namibia and covers a sky area many times the size of the full moon.  Also known as the Seven Sisters and M45, the Pleiades lies about 400 light years away toward the constellation of the Bull (Taurus).  A common legend with a modern twist is that one of the brighter stars faded since the cluster was named, leaving only six stars visible to the unaided eye. The actual number of visible Pleiades stars, however, may be more or less than seven, depending on the darkness of the surrounding sky and the clarity of the observer's eyesight.   Updates: ESA's ExoMars arrives at Mars today  APOD Retrospective: The Pleiades Star Cluster",
	hdurl: "http://apod.nasa.gov/apod/image/1610/M45_vonEiff_1600.jpg",
	url: "http://apod.nasa.gov/apod/image/1610/M45_vonEiff_960.jpg",
	media_type: "image",
	service_version: "v1",
	copyright: "Hermann von Eiff"
}, {
	date: "2016-10-19",
	title: "M45: The Pleiades Star Cluster",
	text: "Have you ever seen the Pleiades star cluster? Even if you have, you probably have never seen it as dusty as this. Perhaps the most famous star cluster on the sky, the bright stars of the Pleiades can be seen without binoculars even from the heart of a light-polluted city.  With a long exposure from a dark location, though, the dust cloud surrounding the Pleiades star cluster becomes very evident. The featured image was a long duration exposure taken last month from Namibia and covers a sky area many times the size of the full moon.  Also known as the Seven Sisters and M45, the Pleiades lies about 400 light years away toward the constellation of the Bull (Taurus).  A common legend with a modern twist is that one of the brighter stars faded since the cluster was named, leaving only six stars visible to the unaided eye. The actual number of visible Pleiades stars, however, may be more or less than seven, depending on the darkness of the surrounding sky and the clarity of the observer's eyesight.   Updates: ESA's ExoMars arrives at Mars today  APOD Retrospective: The Pleiades Star Cluster",
	hdurl: "http://apod.nasa.gov/apod/image/1610/M45_vonEiff_1600.jpg",
	url: "http://apod.nasa.gov/apod/image/1610/M45_vonEiff_960.jpg",
	media_type: "image",
	service_version: "v1"
}];

function render(){
    ReactDOM.render(<ApodList data={data}/>, document.getElementById("container"));    
}
render();