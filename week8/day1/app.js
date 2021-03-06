const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const mustacheExpress = require('mustache-express')
const blogRouter = require('./routes/blog.js')
const bcrypt = require('bcryptjs');


const session = require('express-session')

app.use(session({
    secret: "secret",
    resave: "false",
    saveUninitialized: true
}))


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
app.use(express.static(__dirname + '/public'))

app.set('views', './views')
app.set('view engine', 'mustache')

app.engine('mustache', mustacheExpress())

app.use('/blog', blogRouter)

app.get('/', (req, res) => {
    if (req.session) {
        console.log("SESSION: ", req.session.userId)
    } else {
        console.log('NO SESSION')
    }
    db.any('SELECT * FROM books WHERE user_id = $1', [req.session.userId])
        .then((books) => {
            res.render('index', { books: books })
        })
})

app.post('/book-post', (req, res) => {
    console.log(req.body)
    let title = req.body.title
    let author = req.body.author
    let isbn = parseInt(req.body.isbn)
    db.none('INSERT INTO public.books(author, isbn, title, user_id) VALUES($1, $2, $3, $4)', [title, isbn, author, req.session.userId])
        .then(() => {
            res.redirect('/')
        })

})

app.post('/delete-book', (req, res) => {
    let isbn = req.body.isbn
    console.log(isbn)
    console.log()
    db.none('DELETE FROM public.books WHERE isbn=$1 AND user_id=$2;', [isbn, req.session.userId])
        .then(() => {
            res.redirect('/')
        }).catch((error) => {
            console.log(error)
        })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/add-user', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
    bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash(password, salt, function (error, hash) {
            console.log(hash)
            if (!error) {
                db.none('INSERT INTO users(username, password) VALUES($1, $2);', [username, hash])
                    .then(() => {
                        res.redirect('/login')
                    })
            }
        })
    })
    


})

app.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password
    db.one("SELECT user_id, username, password FROM public.users WHERE username = $1;", [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function (error, result) {
                if (result) {
                    if (req.session) {
                        req.session.userId = user.user_id
                    }
                    console.log("USER ID: ", req.session.userId)
                    res.redirect('/')
                } else {
                    res.send('INVALID PASSWORD')
                }
            })
        }).catch((error) => {
            console.log(error)
            res.send("User not found")
        })
})


app.listen(3006, () => {
    console.log('SERVER RUNNING')
})