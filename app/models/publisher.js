'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Publisher', {
    pub_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(32), allowNull: false},
    established_date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
  }, {
    classMethods: {},
    tableName: 'publisher',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    hooks: {
      beforeCreate: function() {
        /** create작업 전에 해야할 사항들. **/
        console.log('######[publisher] beforeCreate hooks triggered');
      },
      afterCreate: function() {
        /** create작업 후에 해야할 사항들. **/
        console.log('######[publisher] afterCreate hooks triggered');
      },
      beforeBulkUpdate: function() {
        /** create작업 후에 해야할 사항들. **/
        console.log('######[publisher] beforeUpdate hooks triggered');
      },
      afterBulkUpdate: function() {
        /** create작업 후에 해야할 사항들. **/
        console.log('######[publisher] afterUpdate hooks triggered');
      },
      beforeBulkDestroy: function() {
        /** create작업 후에 해야할 사항들. **/
        console.log('######[publisher] beforeDestroy hooks triggered');
      },
      afterBulkDestroy: function() {
        /** create작업 후에 해야할 사항들. **/
        console.log('######[publisher] afterDestroy hooks triggered');
      }
    }
  });
};
