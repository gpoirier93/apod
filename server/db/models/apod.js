"use strict";

module.exports = function(sequelize, DataTypes) {
  var Apod = sequelize.define('Apod', {
    date: { type: DataTypes.DATEONLY, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT },
    url: { type: DataTypes.STRING(1000) },
    hdurl: { type: DataTypes.STRING(1000) },
    copyright: { type: DataTypes.STRING },
    mediaType: { type: DataTypes.ENUM('image', 'video') }
  },
  {
      freezeTableName: true
  });

  return Apod;
};