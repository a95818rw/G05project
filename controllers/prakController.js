const { MD5 } = require('crypto-js');
const park_mod = require('../models/parkMoudels');
const md = require('./md5')

exports.getEntrancepage = async (req, res) => {
    res.render('entrance', { title: 'Express' });
};

exports.register = async (req, res) => {
    res.render('register', { title: 'Express' });
};

exports.adduser = async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.pwd;
    var hash;
    var userlist;
    var x = 0;
    console.log(pwd);
    hash = pwd+"fv@ASDhjvsf";
    hash = MD5(hash).words[0];
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
        await park_mod.adduser(name, email, hash).then(([rows]) => {
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
  const name = req.body.name;
  const pwd = req.body.pwd;

  var CorrectPwd;
  var hash;
  var direct;

  try {
    await park_mod.selectPwd(name).then(([rows]) => {
      CorrectPwd = rows[0].pwd;
    });
  } catch (err) {
    console.log(err);
    res.redirect('/login');
  }

  hash = pwd+"fv@ASDhjvsf";
  hash = MD5(hash).words[0];
  
  if(CorrectPwd == hash){
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


exports.addLiked = async (req, res) => {
  const user = req.body.user;
  const amusementSeq = req.body.amusementSeq;
  const name = req.body.name;
  const x = req.body.x;
  const y = req.body.y;

  var temp;
  var confirm = 0;
  var direct;
  direct = "/playground?user=" + user;
  
  try {
    await park_mod.likeListConfirm(user, amusementSeq).then(([rows]) => {


      try {
        temp = rows[0].likedSeq;
      } catch (error) {
        confirm = 1;
      }
      
    });
    // park_mod.addupdate(amusementSeq);
  } catch (err) {
    console.log(err);
  }

  if(confirm == 1){
    try {
      await park_mod.addLikeList(user, amusementSeq, name, x, y).then(([rows]) => {
        res.redirect(direct);
      });
    } catch (err) {
      console.log(err);
      res.redirect(direct);
    }
  }
  res.redirect(direct);
};

exports.liked = async (req, res) => {
  const user = req.query.user;
  let likeList;
  
  try {
    await park_mod.selectliked(user).then(([rows]) => {
      likeList = rows;
    });
  } catch (err) {
    console.log(err);
  }
  console.log(likeList);
  res.render('liked', { user: user, likeList: likeList});

};

exports.deleteliked = async (req, res) => {
  const user = req.body.user;
  const seq = req.body.amusementSeq;
  var direct;
  direct = "/liked?user=" + user;
  
  try {
    await park_mod.deleteliked(user, seq).then(([rows]) => {
    });
    // park_mod.deleteupdate(amusementSeq);
  } catch (err) {
    console.log(err);
    res.redirect(direct);
  }
  res.redirect(direct);
};

exports.route = async (req, res) => {
  const user = req.query.user;
  let likeList;

  try {
    await park_mod.selectlikedord(user).then(([rows]) => {
      likeList = rows;
    });
  } catch (err) {
    console.log(err);
  }

  res.render('route', { user: user, likeList: likeList});

};