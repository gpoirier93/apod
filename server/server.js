var express = require("express");
var path = require("path");
var apods = require("./apods.json");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));

app.get('/apod', function(req, res) {
	res.send(apods);
});

app.listen(5000,function(){
    console.log("Started listening on port", 5000);
});