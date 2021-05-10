const park_mod = require('../models/parkMoudels');
  
exports.getEntrancepage = async (req, res) => {
    res.render('entrance', { title: 'Express' });
};

exports.register = async (req, res) => {
    res.render('register', { title: 'Express' });
};

exports.adduser = async (req, res) => {

    const name = req.query.name;
    const email = req.query.email;
    const pwd = req.query.pwd;
    var userlist;
    var x = 0;

    try {
      await park_mod.selectUser().then(([rows]) => {
        userlist = rows;
      });
    } catch (err) {
      console.log(err);
    }

    for(let i=0; i<userlist.length;i++){
      if(userlist[i].name == name){ x = 1;}
    }

    if(x == 0){

      try {
        await park_mod.adduser(name, email, pwd).then(([rows]) => {
          res.redirect('/login');
        });
      } catch (err) {
        console.log(err);
      }

    } else{
      res.redirect('/register');
    }
};

exports.login = async (req, res) => {
  res.render('login', { title: 'Express' });
};

exports.loginConfirm = async (req, res) => {
  const name = req.query.name;
  const pwd = req.query.pwd;

  var CorrectPwd;
  var direct;

  try {
    await park_mod.selectPwd(name).then(([rows]) => {
      CorrectPwd = rows[0].pwd;
    });
  } catch (err) {
    console.log(err);
    res.redirect('/login');
  }
  
  if(CorrectPwd == pwd){
    direct = "/temp?user=" + name;
    console.log(direct);
    res.redirect(direct);
  } else{
    res.redirect('/login');
  }


};



exports.temp = async (req, res) => {
  res.render('temp', { title: 'Express' });
};