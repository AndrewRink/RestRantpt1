require ('dotenv').config()
const express = require('express')
const app = express()
//imports the places router
app.use('/places', require('./controllers/places'))
//homepage 
app.get('/', (req, res) => {
    res.send ('hello world')
})

//adds a wildcard route/404 page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)