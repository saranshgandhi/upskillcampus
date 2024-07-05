// routes/courseRoutes.js
const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all courses
router.get('/', authMiddleware, (req, res) => {
    Course.find().then(courses => res.json(courses));
});

// Get a specific course by ID
router.get('/:id', authMiddleware, (req, res) => {
    Course.findById(req.params.id).then(course => res.json(course));
});

// Create a new course
router.post('/', authMiddleware, (req, res) => {
    const newCourse = new Course({
        title: req.body.title,
        description: req.body.description,
        videos: req.body.videos
    });

    newCourse.save().then(course => res.json(course));
});

module.exports = router;
