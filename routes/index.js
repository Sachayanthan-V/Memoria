const express = require("express");
const router = express.Router();
const appController = require("./../controllers/appsController");
const homeController = require("./../controllers/homeController");
const appRouter = require('./app');

router.get("/", homeController.home);
router.all('/app', appRouter); 

module.exports = router;