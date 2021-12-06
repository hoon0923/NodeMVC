"use strict";

const express = require("express")
const router = express.Router();

// controller import
const homeController = require("./homeController");

router.get("/", homeController.home);
router.get("/login", homeController.login);

module.exports = router;