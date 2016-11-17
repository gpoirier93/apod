var async = require("async");
var moment = require('moment');
var apodService = require('../services/apodService.js');
var models = require('../db/models');

// First argument is node, second is file name, third is what is passed through CLI
var yearToFetch = process.argv[2];
var apods = [];
var refetchAttempt = 0;
var endDate = new Date(yearToFetch, 10, 16);
var startDate = new Date(yearToFetch, 0, 1);
var dates = getDates(startDate, endDate);

console.log('insert bulk for dates : '+moment(startDate).format('YYYY-MM-DD')+' to '+moment(endDate).format('YYYY-MM-DD'));

function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
      dateArray.push(currentDate);
      var dat = new Date(currentDate.valueOf())
      dat.setDate(dat.getDate() + 1);
      currentDate = dat;
  }
  return dateArray;
}

function removeDateFromDates(date) {
  var index = dates.indexOf(date);
  if (index > -1) {
    dates.splice(index, 1);
  }
}

function fetchApod(date, callback) {
  apodService.getPotd(date, function(error, apodJSON) {
    if (!error && apodJSON) {
      apods.push(apodJSON);
      removeDateFromDates(date);
      console.log(moment(apodJSON.date).format('YYYY-MM-DD')+" pushed successfully");
    } else {
      console.log(moment(date).format('YYYY-MM-DD')+" was not pushed successfully");
    }
    callback();
  });
}

var queue = async.queue(fetchApod, 1);
queue.drain = function() {
  if (dates.length > 0 && refetchAttempt < 5) {
    console.log('Trying refetch')
    refetchAttempt++;
    queue.push(dates);
  } else {
    console.log('Bulk fetch finished');
    models.Apod.bulkCreate(apods);
    console.log('Bulk create finished');
  }
}

queue.push(dates);



 
