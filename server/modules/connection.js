const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '13.209.17.123',
  post: 3306,
  user: 'shamver',
  password: '0114',
  database: 'mysql',
});

module.exports = connection;
