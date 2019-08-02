const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '1.1.1.1',
  post: '0000',
  user: 'user',
  password: 'password',
  database: 'mysql',
});
connection.connect();
