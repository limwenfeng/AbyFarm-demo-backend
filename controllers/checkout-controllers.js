const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
var db = require('../database');
const HttpError = require('../models/http-error');


const checkout = async (req, res, next) => {
  const cartItems = req.body;
  try {
    cartItems.forEach((item) => {
      const productid = item.id;
      const itemqty = item.qty;
      const ordercost = item.price * itemqty;

      let sql = `INSERT INTO myorders (userid, productid, batchid, itemqty, ordercost, estimateddelivery, status) \
              VALUES ('1', '${productid}', 'BTC123456', '${itemqty}', '${ordercost}', '2021-07-16', 'Processing')`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        // res.send('Inserted Cart Items');
      })
    })
  } catch (err) {
    const error = new HttpError(
      'Invalid',
      500
    )
    return next(error)
  }
  res.status(201).json(cartItems);
};

exports.checkout = checkout;

