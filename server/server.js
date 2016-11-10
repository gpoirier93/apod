var express = require("express");
var path = require("path");
var apods = require("./apods.json");
var models = require("./db/models");
var apodRouter = require("./routes/apodRouter.js");
var searchRouter = require("./routes/searchRouter.js");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use('/apods', apodRouter);
app.use('/search', searchRouter);

// SYNC DB
models.sequelize.sync({force:false}).then(function () {
  	app.listen(5000,function(){
    	console.log("Started listening on port", 5000);
	});
});