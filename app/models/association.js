'use strict';

var association = {
  init: function(db) {
    db.Publisher.hasMany(db.Books, {foreignKey: 'pub_id'});

    db.Books.belongsTo(db.Publisher, {foreignKey: 'pub_id', targetKey: 'pub_id'});

    /*
    db.Continent.hasMany(db.Country, {foreignKey: 'continent_id'});
    db.ProductOrder.belongsTo(db.ProductOption, {foreignKey: 'option_id', targetKey: 'option_id'});
    db.ProductOrder.hasOne(db.ProductCoupon, {foreignKey: 'order_id'}); */
  }
};

module.exports = association;
