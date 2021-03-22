const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')
const moviesRouter = require('./routes/movies')

const PORT = 3000

global.trips = []

global.movies = []

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.use('/trips', tripsRouter)

app.use('/movies', moviesRouter)

let tasks = [
    {title: 'Wash Car', priority: 'High'},
    {title: 'Do Dishes', priority: 'High'},
    {title: 'Do Homework', priority: 'High'}
]



app.get('/addTasks', (req, res) => {
    res.render('addTasks')
})

app.post('/addTasks', (req, res) => {
    const task = {title: req.body.title, priority: req.body.priority}
    tasks.push(task)
    res.redirect('/tasks')
})

app.get('/tasks', (req, res) => {
    res.render('tasks', { allTasks: tasks, totalTasks: tasks.length})
})

app.get('/add-customer', (req, res) => {
    res.render('add-customer')
})

app.post('/add-customer', (req,res) => {
    const firstName = req.body.firstName
    const age = req.body.age
    res.render('confirmation', {firstName: firstName, age: age})
})



app.get('/', (req, res) => {
    res.render('index', {productName: 'iphone', price: 300})
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT PORT ${PORT}.....`)
})