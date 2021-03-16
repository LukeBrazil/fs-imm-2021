const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')


app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

let tasks = [
    {title: 'Wash Car', priority: 'High'},
    {title: 'Do Dishes', priority: 'High'}
]

app.get('/tasks', (req, res) => {
    res.render('tasks', { allTasks: tasks })
})

app.get('/', (req,res) => {
    res.render('index', {productName: 'iphone', price: 300})
})

app.listen(3000, () => {
    console.log('SERVER RUNNING.....')
})