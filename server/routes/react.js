const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.sendFile('/index.html'));
router.get('/test', (req, res) => res.send('hgggsdgadsa'));
router.get('/test/:ss', (req, res) => res.send('alsdf'));

module.exports = router;
