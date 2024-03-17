const express = require("express");
const router = express.Router();
const appController = require("./../controllers/appsController");
const appRouter = require('./app');

router.get("/", appController.home);
router.all('/app', appRouter);

module.exports = router;