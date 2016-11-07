const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.LEANCLOUD_APP_PORT || 4001
const compression = require('compression')
app.use(express.static(path.join(__dirname, './dist')));

// leanengine add next
var AV = require('leanengine')
AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
})
app.enable('trust proxy')
app.use(AV.express())
app.use(AV.Cloud.HttpsRedirect())

app.use(compression())


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/html/index.html'));
});

app.listen(PORT, function() {
  console.log('App is now running on PORT ' + PORT + '!')
})