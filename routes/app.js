const express = require('express');
const router = express.Router();
const appsController = require('./../controllers/appsController');

console.log('Entered into App Router');
router.all('*', appsController.home);

module.exports = router;