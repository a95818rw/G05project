const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'a95818tw',
//   database: 'map',
// });

const pool = mysql.createPool({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bcba83ee034efd',
  password: '4242b364',
  database: 'heroku_cbf44c9d77f07e2',
});


// test
// pool.query('select * from portal_table', (err, results) => {
//   console.log(JSON.stringify(results));
//   console.log(err);
// });

module.exports = pool.promise();