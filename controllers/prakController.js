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
    direct = "/introduce?user=" + name;
    console.log(direct);
    res.redirect(direct);
  } else{
    res.redirect('/login');
  }

};

exports.introduce = async (req, res) => {
  const user = req.query.user;
  res.render('introduce', { user: user });
};

exports.map = async (req, res) => {
  const user = req.query.user;
  res.render('map', { user: user });
};

exports.playground = async (req, res) => {
  const user = req.query.user;
  let amusement;
  
  try {
    await park_mod.selectAmusement().then(([rows]) => {
      amusement = rows;
    });
  } catch (err) {
    console.log(err);
  }

  res.render('playground', { user: user, amusement: amusement });
};



exports.temp = async (req, res) => {

  res.render('temp', { title: 'Express' });
  const user = req.query.user;
  console.log(user);
  res.render('temp', { user: user });

};