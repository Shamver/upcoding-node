const express = require('express');
const pool = require('../../modules/connection');

const router = express.Router();
const selectMenuList = `
  SELECT * FROM UC_MENU
`;

router.post('/menu', (req, res) => {
  pool.getConnection((err, connection) => {
    if (!err) {
      connection.query(selectMenuList, (err2, rows) => {
        if (!err2) {
          res.send(JSON.stringify(rows));
        } else {
          console.log(`query error : ${err}`);
          console.log(err);
        }
      });
    }
    // 커넥션을 풀에 반환
    connection.release();
  });
});

module.exports = router;
