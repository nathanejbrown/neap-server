const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', function (req, res, next) {
  queries.getItems('coffee', function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: 'success',
        data: result
      });
    }
  });
});

router.get('/:id', function (req, res, next) {
  let coffeeId = req.params.id;
  queries.getItems('coffee', function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: 'success',
        data: result
      });
    }
  }, coffeeId);
});

module.exports = router;
