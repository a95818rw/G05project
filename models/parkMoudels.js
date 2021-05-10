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



};

module.exports = UPDATE;