const express = require('express')
const path = require('path')

const PORT = 8080
const app = express()
const router = require('./server/router')

app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function() {
  console.log('App is now running on PORT ' + PORT + '!')
})