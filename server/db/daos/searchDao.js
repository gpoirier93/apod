 var moment = require('moment');
var models = require('../models');

var searchDao = {};

searchDao.searchApod = function(year, month, day, cb) {
	console.log(typeof(year), typeof(month), typeof(day));
	if (typeof(year) === 'number' && typeof(month) === 'number' && typeof(day) === 'number') {
		var startDate;
		var endDate;
		if (year === 0 && month === 0 && day === 0) {
			models.Apod.findAll({ limit:365 }).then(function(apods) {
				if (apods) {
					cb(apods);
				} else {
					cb(null, 'No results');
				}
			});
		} else if (month === 0 && day === 0) {
			startDate = moment(new Date(year, 1, 1));
			endDate = moment(new Date(year, 1, 1)).add(11, 'M').add(31, 'd');
			models.Apod.findAll({ 
				where : { 
					date: { 
						$between: [ startDate.toDate(), endDate.toDate() ] 
					}
				}
			}).then(function(apods) {
				if(apods) {
					cb(apods);
				} else {
					cb(null, 'No results');
				}
			});
		} else if (day === 0) {
			startDate = moment(new Date(year, month-1, 1));
			endDate = moment(new Date(year, month-1, 1)).add(31, 'd');
			models.Apod.findAll({ where : { 
					date: { 
						$between: [ startDate.toDate(), endDate.toDate() ] 
					}
				}
			}).then(function(apods) {
				if (apods) {
					cb(apods);
				} else {
					cb(null, 'No results');
				}
			});
		} else {
			var exactDate = new Date(year, month-1, day);
			models.Apod.findOne({ 
				where : {
					date: exactDate
				}
			}).then(function(apod) {
				if (apod) {
					cb(apod);
				} else {
					cb(null, 'No results');
				}
			})
		}
	} else {
		cb(null, 'Invalid arguments');
	}
}

module.exports = searchDao;