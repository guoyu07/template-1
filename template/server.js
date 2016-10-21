const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.LEANCLOUD_APP_PORT || 8080
const router = require('./server/router')
const compression = require('compression')

/*
// leanengine add next
var AV = require('leanengine')
AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
})
app.use(AV.express())
*/

app.use(compression())
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function() {
  console.log('App is now running on PORT ' + PORT + '!')
})
