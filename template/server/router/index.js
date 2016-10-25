const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.resolve('./public/index/html/index.html'));
});

module.exports = router;