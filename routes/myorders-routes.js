const express = require('express');
const { check } = require('express-validator');

const myordersControllers = require('../controllers/myorders-controllers');

const router = express.Router();


router.get('/', myordersControllers.getOrdersByUserId);

module.exports = router;
