var request = require('request');
var moment = require('moment');
var models = require('../db/models');
var apiKey = 'GV5BwqkiDLorofJQHZvd7u29AtEM24fq5D21vyew';
var baseUrl = 'https://api.nasa.gov/';
var urlPath = '/planetary/apod';

module.exports = {
  getPotd : function(date, callback) {
    request({
      method:'GET',
      baseUrl:baseUrl,
      url:urlPath, 
      qs: { 
        api_key: apiKey,
        date:moment(date).format('YYYY-MM-DD')
      }
    }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        apodJSON = JSON.parse(body);
        var apod = {
          date: new Date(apodJSON.date),
          title: apodJSON.title,
          text: apodJSON.explanation,
          mediaType: apodJSON.mediaType == 'image' ? 'image' : 'video',
          url: apodJSON.url,
          hdurl: apodJSON.hdurl,
          copyright: apodJSON.copyright
        };
        callback(null, apod);
      } else {
        callback(error, null);
      }
    })
  }
}
