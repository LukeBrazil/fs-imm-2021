const express = require('express')
const app = express()
const cors = require('cors')

const todos = []

app.use(cors())
app.use(express.json())

app.get('/names', (req,res) => {
    let name = {'firstname': 'John', 'lastname': 'Doe'}
    res.send(`Hello ${name.firstname} ${name.lastname}.`)
})

app.get("/digital-crafts/cohort/:year", (req, res) => {
    let year = req.params.year
    res.send(`I study at DigitalCrafts ${year} Cohort`)
})

app.get("/name/:firstname/lastname/:lastname", (req, res) => {
    let firstname = req.params.firstname
    let lastname = req.params.lastname
    res.json({
        "fullname": `${firstname}, ${lastname}`
    })
})

app.post('/name', (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let fullname = {'fullname': `${firstName}, ${lastName}`}
    res.json(fullname)
})

app.post('/todo', (req,res) => {
    let title = req.body.title
    let priority = req.body.priority
    let date = req.body.date
    todos.push({
        "title": title,
        "priority": priority,
        "date": date
    })
    console.log(todos)
})

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.listen(3000, () => {
    console.log('server is running')
})