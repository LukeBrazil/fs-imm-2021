const express = require('express')
const app = express()
const pgp = require('pg-promise')()
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

app.use(express.urlencoded())

app.set('views', './views')
app.set('view engine', 'mustache')

app.engine('mustache', mustacheExpress())

app.get('/', (req, res) => {
    db.any('SELECT * FROM books')
    .then((books) => {
    res.render('index', {books: books})
})
})

app.post('/book-post', (req, res) => {
    console.log(req.body)
    let title = req.body.title
    let author = req.body.author
    let isbn = parseInt(req.body.isbn)
    db.none('INSERT INTO public.books(author, isbn, title) VALUES($1, $2, $3)', [title, isbn, author])
        .then(() => {
            res.redirect('/')
        })

})

app.post('/delete-book', (req, res) => {
    let isbn = req.body.isbn
    console.log(isbn)
    db.none('DELETE FROM public.books WHERE isbn = $1', [isbn])
        .then(() => {
            res.redirect('/')
        })
})



app.listen(3000, () => {
    console.log('SERVER RUNNING')
})