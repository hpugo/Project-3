require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/teams', require('./controllers/teams'))


app.get('*', (req, res) => {
    res.status(404).render('error404')
})
app.listen(process.env.PORT)

