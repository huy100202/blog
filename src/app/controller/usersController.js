const usersModel = require("../models/user");
const fs = require("fs");
class UsersController {
  register(req, res) {
    res.render("users/register.pug");
  }
  async store(req, res) {
    try {
      
      const file = req.file;
      req.body.photo = file ? file.filename : "no-avatar.png";
      const newUser = new usersModel({
        full_name: req.body.full_name,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        profilePic: req.body.photo,
      });
      
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  }
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(400).json("Wrong credentials!");

      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");

      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new UsersController();
