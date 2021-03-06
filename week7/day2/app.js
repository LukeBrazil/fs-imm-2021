const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')


app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

app.use(express.urlencoded())

let tasks = [
    {title: 'Wash Car', priority: 'High'},
    {title: 'Do Dishes', priority: 'High'},
    {title: 'Do Homework', priority: 'High'}
]

let trips = []

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

app.get('/trips', (req, res) => {
    res.render('trips', {allTrips: trips})
})

app.post('/trips', (req, res) => {
    const trip = {title: req.body.title, depart: req.body.depart, return: req.body.return, id: Math.floor(100000 + Math.random() * 900000)}
    trips.push(trip)
    console.log(trips)
    res.redirect('trips')
})

app.post('/trips-delete', (req, res) => {
    const id = req.body.id
    let trip = trips.findIndex(trip => trip.id == id)
    trips.splice(trip, 1)
    res.redirect('trips')
})

app.get('/', (req,res) => {
    res.render('index', {productName: 'iphone', price: 300})
})

app.listen(3000, () => {
    console.log('SERVER RUNNING.....')
})