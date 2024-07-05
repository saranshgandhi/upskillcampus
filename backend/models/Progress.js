const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'courses',
        required: true
    },
    completedVideos: [String],
    quizScores: [{
        quizId: {
            type: Schema.Types.ObjectId,
            ref: 'quizzes'
        },
        score: Number
    }]
});

module.exports = Progress = mongoose.model('progress', ProgressSchema);