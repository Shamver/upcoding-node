const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => res.send({ data: 'this is index.' }));
router.get('/file', (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html')));

module.exports = router;
