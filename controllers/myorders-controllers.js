const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

let ORDERS = [
  {
      id: 'u1',
      producttype: "Chye Sim",
      image: IMAGES.CaiXin,
      price: "$1.50",
      quantity: "3",
      weight: "100g",
      totalprice: "$4.50",
      ordertype: "Pre-Order",
      batchid: 'CHY987654',
      estimateddelivery: "05 Jun 2021",
      orderid: "210520PRE00001",
      status: 'Seeding',
  },
  {
      id: 'u1',
      producttype: "Kang Kong",
      image: IMAGES.KangKong,
      price: "$1.20",
      weight: "100g",
      quantity: "2",
      totalprice: "$2.40",
      ordertype: "Buy Now",
      estimateddelivery: "21 May 2021",
      status: 'Delivered',
  },
];

const getOrdersByUserId = (req, res, next) => {
  const userId = req.params.uid; // { uid: 'u1140000' }

  const orders = ORDERS.filter(ord => {
    return ord.id === userId;
  });

  if (!orders || orders.length === 0) {
    throw new HttpError('Could not find orders for the provided id.', 404);
  }

  res.json({ orders });
};

exports.getOrdersByUserId = getOrdersByUserId;