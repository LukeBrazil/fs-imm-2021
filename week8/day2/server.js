const express = require('express')
const pgp = require('pg-promise')()
const app = express()
const mustacheExpress = require('mustache-express')

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'fs-imm-test',
    user: 'postgres',
    password: 'Baseball13!',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn)

app.engine('mustache', mustacheExpress())
app.use(express.json())
app.set('view engine', 'mustache')


app.set('views', './views')

app.get('/login', (req,res) => {
    res.render('login')
})



app.listen(3000, () => {
    console.log('Server running...')
})

