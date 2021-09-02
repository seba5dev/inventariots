var express = require('express')
var bodyParser = require('body-parser')

var app = express()


var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
    res.send('Hola Mundo')
})

app.get('/Catalan', function (req, res) {
    res.send('hola món')
})

app.post('/login', urlencodedParser, function (req, res) {
  res.send(req.body.username)
  res.send(req.body.password)
  res.send()
})

app.listen(3000)