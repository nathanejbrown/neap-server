const knex = require('./connection');

exports.getItems = function (tableName, callback, itemId) {
  if (itemId) {
    knex(tableName)
    .where('id', itemId)
    .then(result => {
      callback(null, result);
    }).catch(err => {
      callback(err);
    });
  } else {
    knex(tableName)
    .then(result => {
      callback(null, result);
    }).catch(err => {
      callback(err);
    });
  }
};
