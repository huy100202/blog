class SitesController {
  index(req,res) {
      let login;
      if(req.session.login){
        login = req.session.login;
      }
      res.render('site/',{ctl: 'site',login : login,files: ['logout'],})
  }
  view(req,res){
      res.render('homePage')
  }
  
}

module.exports = new SitesController;