const express = require('express')
const router = express.Router()
const pgp = require('pg-promise')()

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
    db.any('SELECT * FROM public.posts ORDER BY post_id ASC')
        .then((posts) => {
            if (posts) {
                console.log(posts)
                res.render('blog', {posts: posts})
            }
           
        })
        
})

router.post('/add-blog-post', (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let date_created = new Date()
    db.none('INSERT INTO public.posts(title, body, date_created) VALUES($1, $2, $3)', [title, body, date_created])
        .then(() => {
            res.redirect('/blog')
        })
})

router.post('/delete-blog-post', (req, res) => {
    let post_id = req.body.post_id
    db.none('DELETE FROM public.posts WHERE post_id = $1', [post_id])
        .then(() => {
            res.redirect('/blog')
        })
})

module.exports = router