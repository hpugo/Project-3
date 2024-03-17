require('dotenv').config()
const express = require('express')
const app = express()

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
  });
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home', {stylesheet:'/homepage/homepage.css'});
})

app.use('/teams', require('./controllers/teams'))


app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
})

