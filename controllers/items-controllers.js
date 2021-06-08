const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
var db = require('../database');
const HttpError = require('../models/http-error');


const getItems = (req, res, next) => {
  let sql = 'SELECT * FROM tracking';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    return res.json({
      items: results
    })
  })
};

exports.getItems = getItems;

