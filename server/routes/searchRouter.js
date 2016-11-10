var express = require('express');
var models = require('../db/models');
var searchDao = require('../db/daos/searchDao.js');

var searchRouter = express.Router();

searchRouter.get('/apods', function(req, res) {
	var year = req.query.year ? parseInt(req.query.year) : 0;
	var month = req.query.month ? parseInt(req.query.month) : 0;
	var day = req.query.day ? parseInt(req.query.day) : 0;
	console.log(year, month, day);
	searchDao.searchApod(year, month, day, function(apods, err) {
		if (err) {
			res.end();
		} else {
			if (apods) {
				res.send(apods);
			}
		}
	});
});

module.exports = searchRouter;