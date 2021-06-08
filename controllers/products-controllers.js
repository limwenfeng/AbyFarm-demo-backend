const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
var db = require('../database');
const HttpError = require('../models/http-error');


const getProducts = (req, res, next) => {
  let sql = 'SELECT * FROM Products';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    return res.json({
      products: results
    })
  })
};

exports.getProducts = getProducts;

