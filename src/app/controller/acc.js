class AccountsController {
    index(req,res) {
        res.render('acc/',{ctl: 'acc'})
    }
    view(req,res){
        res.render('homePage')
    }
    
  }
  
  module.exports = new accountsController;