const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.resolve('./public/html/index.html'));
});

router.get('/mint', function(req, res) {
  res.sendFile(path.resolve('./public/html_mint/index.html'));
});

router.get('/element', function(req, res) {
  res.sendFile(path.resolve('./public/html_element/index.html'));
});

module.exports = router;