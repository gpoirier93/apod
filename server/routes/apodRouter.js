var express = require('express');
var moment = require('moment');
var models = require('../db/models');

var apodRouter = express.Router();

apodRouter.get('/', function(req, res) {
	var page = req.query.page;
	var offset = page ? page * 100 : 0;
	models.Apod.findAll({ limit: 100, offset: offset, order: [ ['date', 'DESC' ] ]})
	.then(function(apods) {
		if (apods) {
			res.send(apods);
		} else {
			res.status(404).end();
		}
	});
});

apodRouter.get('/:id', function(req, res) {
	var id = req.params.id;
	models.Apod.findById(id).then(function(apod) {
		if(apod) {
			res.send(apod);
		} else {
			res.status(404).end();
		}
	});
});

module.exports = apodRouter;
