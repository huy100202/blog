"use strict";

var express = require("express");

var router = express.Router();

var saveImg = require("../app/components/saveImg");

var uploadImg = require("../app/components/uploadimg");

var validate = require("../helpers/validate");

var userController = require("../app/controller/usersController");

router.use("/register", userController.register);
router.use("/store", uploadImg.single('image'), validate.register, saveImg.saveImg, userController.store);
module.exports = router;