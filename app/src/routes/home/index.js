"use strict";

const express = require("express")
const router = express.Router();

// controller import
const controller = require("./homeController");

router.get("/", controller.home);
router.get("/login", controller.login);

module.exports = router;