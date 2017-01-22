const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 	
app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.get('/qui-som', function (req, res) {
  res.render('qui-som')
})
app.get('/galeria', function (req, res) {
  res.render('galeria')
})
app.get('/contacto', function (req, res) {
  res.render('contacto')
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )
module.exports = app;
