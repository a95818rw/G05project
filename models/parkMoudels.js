const db = require('../utils/database');

const UPDATE = class UPDATE {

  static selectUser() {
    return db.execute('SELECT name FROM user group by name;');
  }

  static adduser(name, email, pwd) {
    return db.execute(
      'INSERT INTO `map`.`user` (`name`, `email`, `pwd`) VALUES (?, ?, ?);',
      [name, email, pwd]
    );
  }

  static selectPwd(name) {
    return db.execute(
      'SELECT pwd FROM user where name = ? group by name;',
      [name]
    );
  }

  static selectAmusement() {
    return db.execute('SELECT * FROM amusement order by seq;');
  }

  static likeListConfirm(user, amusementSeq) {
    return db.execute(
      'select * from likelist where user=? and amusementSeq = ?;',
      [user, amusementSeq]
    );
  }

  static addLikeList(user, amusementSeq, name, x, y) {
    return db.execute(
      'INSERT INTO likelist (user, amusementSeq, amusementName, amusementX, amusementY) VALUES (?, ?, ?, ?, ?);',
      [user, amusementSeq, name, x, y]
    );
  }

};

module.exports = UPDATE;