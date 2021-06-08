const express = require('express');

const itemsController = require('../controllers/items-controllers');

const router = express.Router();

router.get('/', itemsController.getItems);

module.exports = router;
