const express = require('express')
const app = express()
const PORT = 3000; 	
app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.get('/anna_meli', function (req, res) {
  res.render('anna_meli', { title: 'Hey', message: 'Hello there!' })
})





app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )
module.exports = app;
