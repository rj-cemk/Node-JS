var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Creating APIs')
})
 
app.get('/user', function (req, res) {
    res.send('Creating APIs on URL Pattern')
    console.log("GET Method")
  })
console.log('Server started at port : 3000')
app.listen(3000)