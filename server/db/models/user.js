'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  }, {
     freezeTableName:true,
     underscored: true, 
     instanceMethods: {
      generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
      },
      validPasssord: function(password) {
        bcrypt.compareSync(password, this.password);
      }
    }
  });
  return User;
};