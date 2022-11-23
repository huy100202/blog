const { checkExist } = require("./checkExist");
module.exports = {
  checkLogin: (req, res, next) => {
    // if (checkExist(req.body)) {
    //   next();
    // } else {
    //   res.redirect("login?err=User account or password incorrect");
    // }
    checkExist(req.body).then((check) => {
      if (check) {
        req.session.login = check;
        next();
      } else {
        res.redirect("login?err=User account or password incorrect");
      }
    });
  },
};
