const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const users = [{username: 'johndoe', password: '1234'}]

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const authUser = users.find((user) => user.username == username && user.password == password)

    if(authUser) {
        const token = jwt.sign({username: username}, 'SECRET')
        res.json({success: true, token: token})
    } else {
        res.json({success: false})
    }
 })

app.listen(8080, () => {
    console.log('Server is running...')
})