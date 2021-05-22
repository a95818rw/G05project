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
    return db.execute('SELECT * FROM amusement order by liked desc;');
  }

  static likeListConfirm(user, amusementSeq) {
    return db.execute(
      'select * from likelist where user=? and amusementSeq = ?;',
      [user, amusementSeq]
    );
  }

  static addLikeList(user, amusementSeq, name, x, y) {
    return db.execute(
      'INSERT INTO likelist (user, amusementSeq, amusementName, amusementX, amusementY, liked) VALUES (?, ?, ?, ?, ?, (select liked from amusement where seq = ?));',
      [user, amusementSeq, name, x, y, amusementSeq]
    );
  }

  static addupdate(amusementSeq){
    db.execute('UPDATE likelist SET liked = ((select liked from amusement where seq = ?)+1) WHERE amusementSeq = ?;',
      [amusementSeq, amusementSeq]);
    db.execute('update amusement set liked = (select liked from likelist WHERE amusementSeq = ? group by liked) WHERE Seq = ?;',
      [amusementSeq, amusementSeq]);
  }

  static selectliked(user) {
    return db.execute('SELECT * FROM likelist where user = ?;',[user]);
  }

  static deleteliked(user, amusementSeq) {
    return db.execute('DELETE FROM likelist WHERE user = ? and amusementSeq = ?;',[user, amusementSeq]);
  }

  static deleteupdate(amusementSeq){
    db.execute('UPDATE likelist SET liked = ((select liked from amusement where seq = ?)-1) WHERE amusementSeq = ?;',
      [amusementSeq, amusementSeq]);
    db.execute('update amusement set liked = (select liked from likelist WHERE amusementSeq = ? group by liked) WHERE Seq = ?;',
      [amusementSeq, amusementSeq]);
  }

  static selectlikedord(user) {
    return db.execute('SELECT * FROM likelist where user = ? order by amusementSeq;',[user]);
  }

};

module.exports = UPDATE;