const express = require('express')
const router = express.Router()
const app = express()

let trips = []

router.get('/', (req, res) => {
    res.render('trips', {allTrips: trips})
})

router.post('/trips-post', (req, res) => {
    const trip = {title: req.body.title, depart: req.body.depart, return: req.body.return, id: Math.floor(100000 + Math.random() * 900000)}
    trips.push(trip)
    console.log(trips)
    res.redirect('/trips')
})

router.post('/trips-delete', (req, res) => {
    const id = req.body.id
    let trip = trips.findIndex(trip => trip.id == id)
    trips.splice(trip, 1)
    res.redirect('/trips')
})

module.exports = router