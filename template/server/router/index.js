const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.resolve('./public/index/html/index.html'));
});

router.get('/mint', function(req, res) {
  res.sendFile(path.resolve('./public/mint/html/index.html'));
});

router.get('/element', function(req, res) {
  res.sendFile(path.resolve('./public/element/html/index.html'));
});

module.exports = router;