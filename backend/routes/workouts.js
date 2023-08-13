const express = require('express')
const Workout = require('../models/workoutModel') 



const router = express.Router()


// imports from controllers

const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


// Get all workouts
router.get('/', getWorkouts)

// Get single workout
router.get('/:id', getWorkout)


// post a new worlout 
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)


// Update workout 
router.patch('/:id', updateWorkout)



module.exports = router