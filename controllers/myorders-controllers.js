const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
var db = require('../database');
const HttpError = require('../models/http-error');

const getOrdersByUserId = (req, res, next) => {
  // const userId = req.params.uid; // { uid: 'u1140000' }
  let sql = 'SELECT * FROM myorders';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.status(201).json(results);
  })
  // const orders = ORDERS.filter(ord => {
  //   return ord.id === userId;
  // });

  // if (!orders || orders.length === 0) {
  //   throw new HttpError('Could not find orders for the provided id.', 404);
  // }
};

exports.getOrdersByUserId = getOrdersByUserId;