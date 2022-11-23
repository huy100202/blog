const { addUser,updateUser } = require("../service/userService");
const fs = require("fs");
class UsersController {
  register(req, res) {
    res.render("users/register",{files:['form']});
  }
  store(req, res) {
    addUser(req.body, req.file);
    res.redirect("/");
  }
  async login(req, res) {
    res.render("users/login", { err: req.query.err });
    // try {
    //   const user = await User.findOne({ email: req.body.email });
    //   !user && res.status(400).json("Wrong credentials!");

    //   const validated = await bcrypt.compare(req.body.password, user.password);
    //   !validated && res.status(400).json("Wrong credentials!");

    //   const { password, ...others } = user._doc;
    //   res.status(200).json(others);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  }
  checkLogin(req, res) {
    res.redirect("/");
  }
  logout(req,res){
    req.session.destroy();
    res.redirect("/");
  }
  changePassword(req,res){
    let login;
      if(req.session.login){
        login = req.session.login;
      }
    res.render("users/changePassword",{files:['form'],login});
  }
  updatePassword(req,res){
    let update ={
      password: req.body.new_password
    }
    updateUser(req.query.id,update,null);
    res.redirect(`/`);
  }
}

module.exports = new UsersController();
