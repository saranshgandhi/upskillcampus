const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videos: [{
        title: String,
        url: String
    }]
});

module.exports = Course = mongoose.model('courses', CourseSchema);