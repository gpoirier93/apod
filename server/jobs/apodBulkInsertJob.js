var async = require("async");
var moment = require('moment');
var apodService = require('../services/apodService.js');
var models = require('../db/models');

function ApodBulkInsertJob() {
  this.getDates = function(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(currentDate);
        var dat = new Date(currentDate.valueOf())
        dat.setDate(dat.getDate() + 1);
        currentDate = dat;
    }
    return dateArray;
  };

  this.sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  this.execute = function() {
    var insert = this;
    endDate = new Date(2016, 10, 10);
    startDate = new Date(2016, 0, 1);
    var dates = insert.getDates(startDate, endDate);
    console.log('insert bulk for dates : '+moment(startDate).format('YYYY-MM-DD')+' to '+moment(endDate).format('YYYY-MM-DD'));
    var apods = [];
    // 1st para in async.each() is the array of items
    async.forEachOf(dates,
      // 2nd param is the function that each item is passed to
      function(date, index, callback){
        insert.sleep(200);
        // Call an asynchronous function, often a save() to DB
        apodService.getPotd(date, function(error, apodJSON) {
          if (!error && apodJSON) {
            apods.push(apodJSON);
            console.log(moment(apodJSON.date).format('YYYY-MM-DD')+" pushed");
            callback();
          } else {
            callback();
          }
        })
      },
      // 3rd param is the function to call when everything's done
      function(err) {
        // All tasks are done now
        models.Apod.bulkCreate(apods);
        console.log("Total object inserted : "+apods.length);
      }
    );
  }
}

var insert = new ApodBulkInsertJob();
insert.execute();


 
