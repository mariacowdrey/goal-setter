const express = require('express')
const router = express.Router()

// Get goals
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get goals'})
})

// Create a goal
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set goal'})
})

// Update goal
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
})

// Delete goal
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})


module.exports = router