// routes/quizRoutes.js
const express = require('express');
const Quiz = require('../models/Quiz');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get quizzes for a specific course
router.get('/course/:courseId', authMiddleware, (req, res) => {
    Quiz.find({ courseId: req.params.courseId }).then(quizzes => res.json(quizzes));
});

// Create a new quiz
router.post('/', authMiddleware, (req, res) => {
    const newQuiz = new Quiz({
        courseId: req.body.courseId,
        questions: req.body.questions
    });

    newQuiz.save().then(quiz => res.json(quiz));
});

module.exports = router;
