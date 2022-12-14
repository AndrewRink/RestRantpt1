require ('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//MIDDLEWARE
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

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

module.exports = app;