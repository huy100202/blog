const express = require("express");
const router = express.Router();
const saveImg = require("../app/components/saveImg");
const uploadImg = require("../app/components/uploadimg");
const validate = require("../helpers/validate");


const userController = require("../app/controller/usersController");

router.use("/register", userController.register);
router.use(
  "/store",
  uploadImg.single('image'),
  validate.register,
  saveImg.saveImg,
  userController.store
);

module.exports = router;
