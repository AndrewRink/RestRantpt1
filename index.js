require ('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//imports the places router
app.use('/places', require('./controllers/places'))
//homepage 
app.get('/', (req, res) => {
    res.render ('home')
})

//adds a wildcard route/404 page
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)