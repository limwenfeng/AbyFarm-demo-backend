const express = require('express');

const checkoutController = require('../controllers/checkout-controllers');

const router = express.Router();

router.post(
    '/',
    [
      check('title')
        .not()
        .isEmpty(),
      check('description').isLength({ min: 5 }),
      check('address')
        .not()
        .isEmpty()
    ],
    placesControllers.createPlace
  );

  module.exports = router;