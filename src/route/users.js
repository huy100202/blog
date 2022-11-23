const express = require("express");
const router = express.Router();
const saveImg = require("../app/components/saveImg");
const uploadImg = require("../app/components/uploadimg");
const validate = require("../helpers/validate");
const login = require("../middleware/login")


const userController = require("../app/controller/usersController");
router.use("/checkLogin",login.checkLogin ,userController.checkLogin);
router.use("/logout" ,userController.logout);
router.use("/changePassword" ,userController.changePassword);
router.use("/login" ,userController.login);
router.use("/register", userController.register);
router.use(
  "/updatePassword",
  validate.changePassword,
  userController.updatePassword,
);
router.use(
  "/store",
  uploadImg.single('image'),
  validate.register,
  saveImg.saveImg,
  userController.store
);

module.exports = router;
