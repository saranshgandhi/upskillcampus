const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'courses',
        required: true
    },
    questions: [{
        question: String,
        options: [String],
        answer: String
    }]
});

module.exports = Quiz = mongoose.model('quizzes', QuizSchema);