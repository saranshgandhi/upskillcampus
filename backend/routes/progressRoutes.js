// routes/progressRoutes.js
const express = require('express');
const Progress = require('../models/Progress');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get progress for a user in a specific course
router.get('/user/:userId/course/:courseId', authMiddleware, (req, res) => {
    Progress.findOne({ userId: req.params.userId, courseId: req.params.courseId })
        .then(progress => res.json(progress));
});

// Update progress for a user in a specific course
router.post('/update', authMiddleware, (req, res) => {
    const { userId, courseId, completedVideos, quizScores } = req.body;

    Progress.findOne({ userId, courseId }).then(progress => {
        if (progress) {
            progress.completedVideos = completedVideos || progress.completedVideos;
            progress.quizScores = quizScores || progress.quizScores;
            progress.save().then(updatedProgress => res.json(updatedProgress));
        } else {
            const newProgress = new Progress({
                userId,
                courseId,
                completedVideos,
                quizScores
            });

            newProgress.save().then(newProg => res.json(newProg));
        }
    });
});

module.exports = router;
