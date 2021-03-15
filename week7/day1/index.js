const express = require('express')
const app = express()

app.get('/names', (req,res) => {
    let name = {'firstname': 'John', 'lastname': 'Doe'}
    res.send(`Hello ${name.firstname} ${name.lastname}.`)
})

app.get("/digital-crafts/cohort/:year", (req, res) => {
    let year = req.params.year
    res.send(`I study at DigitalCrafts ${year} Cohort`)
})

app.listen(3000, () => {
    console.log('server is running')
})