const express = require('express')
const cors = require('cors')
const app = express()
// const http = require('http')

app.use(cors())
app.use(express.urlencoded())



const books = [
    {name: 'Spiderman', genre: 'Action'},
    {name: 'Batman', genre: 'Action'}
]

app.get('/books', (req, res) => {
    console.log('HIT!')
    res.json(books)
})

app.listen(8080, () => {
    console.log('SERVER RUNNING')
})