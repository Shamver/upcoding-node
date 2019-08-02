const express = require('express');
const connection = require('../../modules/connection');

const router = express.Router();

const selectMenuList = `
  SELECT * FROM UC_MENU
`;

router.post('/menu', (req, res) => {
  connection.query(selectMenuList, (err, rows) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(`query error : ${err}`);
      console.log(err);
    }
  });
});

module.exports = router;
