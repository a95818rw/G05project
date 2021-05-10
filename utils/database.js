const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'a95818tw',
  database: 'map',
});

// test
// pool.query('select * from portal_table', (err, results) => {
//   console.log(JSON.stringify(results));
//   console.log(err);
// });

module.exports = pool.promise();