'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING(32), allowNull: false},
    create_date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    classMethods: {},
    tableName: 'users',
    freezeTableName: true,
    underscored: true,
    timestamps: false
  });
};
