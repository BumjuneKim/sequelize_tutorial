'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RentHistory', {
    rent_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    book_id: {type: DataTypes.INTEGER, allowNull: false},
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    rent_date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    classMethods: {},
    tableName: 'rent_history',
    freezeTableName: true,
    underscored: true,
    timestamps: false
  });
};
