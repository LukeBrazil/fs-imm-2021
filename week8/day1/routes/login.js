const express = require('express')
const router = express.Router()
const pgp = require('pg-promise')()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session')

router.use(session({
    secret: "secret",
    resave: "false",
    saveUninitialized: true
}))

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'postgres',
    password: 'Baseball13!',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn)

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/add-user', async (req, res) => {
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

router.post('/', (req,res) => {
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




module.exports = router