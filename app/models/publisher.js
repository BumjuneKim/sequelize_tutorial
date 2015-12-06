'use strict';

module.exports = function(sequelize, DataTypes) {
  var Publisher = sequelize.define('Publisher', {
    pub_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(32), allowNull: false},
    established_date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    classMethods: {},
    tableName: 'publisher',
    freezeTableName: true,
    underscored: true,
    timestamps: false
  });

  return Publisher;
};
