const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
});
connection.connect();
connection.query('SELECT * FROM studyIndex', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results, fields);
});
connection.end();
