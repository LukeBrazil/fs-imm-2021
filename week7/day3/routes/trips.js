const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.render('trips', {allTrips: trips})
})

router.get('/:tripName', (req, res) => {
    const tripName = req.params.tripName
    res.render('tripName', {tripName: tripName})
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
    trips = trips.filter((trip) => trip.id != id)
    res.redirect('/trips')
})

module.exports = router