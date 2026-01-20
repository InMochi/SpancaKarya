const express = require('express')

const router = express.Router()


// GET all Toji
router.get('/' , (req, res) => {
    res.json({mssg: 'get all workouts buddy'})
})

// GET single aja
router.get('/:id' , (req, res) => {
    res.json({mssg: 'get a 1 workouts buddy'})
})

// nambah
router.post('/', (req, res) => {
    res.json({ mssg: 'post a new training' })
})


// delete
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete  training' })
})

// update nih
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'update a new training' })
})



module.exports = router