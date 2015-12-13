'use strict';

var models = require('./index');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Books', {
    book_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pub_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: models.Publisher, key: 'pub_id'}},
    title: {type: DataTypes.STRING(64), allowNull: false},
    author: {type: DataTypes.STRING(16), allowNull: false},
    stock: {type: DataTypes.INTEGER, defaultValue: 1},
    register_date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    classMethods: {},
    tableName: 'books',
    freezeTableName: true,
    underscored: true,
    timestamps: false
  });
};
